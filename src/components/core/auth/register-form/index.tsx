'use client'

import { Button, Link, ProgressBar } from '@/components'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useI18n } from '@/utils/locales/client'
import { StepThree } from './step-three'
import { StepZero } from './step-zero'
import { StepOne } from './step-one'
import { StepTwo } from './step-two'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '@/types'
import { z } from 'zod'
import { registerNewUser } from '@/services'
import { signIn } from '@/auth/helper'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export type RegisterFormValues = z.infer<typeof signUpSchema>

export function RegisterForm() {
  const { control, trigger, watch } = useForm<RegisterFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })
  const [currentStep, setCurrentStep] = useState<number>(0)

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callback') || '/profile'

  const { replace } = useRouter()

  const t = useI18n()

  const getCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <StepZero control={control} />
      case 1:
        return <StepOne control={control} />
      case 2:
        return <StepTwo control={control} />
      case 3:
        return <StepThree control={control} />
    }
  }

  const handleNextClick = async () => {
    switch (currentStep) {
      case 0:
        const stepZeroValid = await trigger(['roles'])
        if (stepZeroValid) {
          setCurrentStep(prev => prev + 1)
        }
        break
      case 1:
        const StepOneValid = await trigger(['phone', 'password', 'repassword'])
        if (StepOneValid) {
          setCurrentStep(prev => prev + 1)
        }

        break
      case 2:
        const StepTwoValid = await trigger([
          'firstname',
          'lastname',
          'email',
          'username',
        ])
        if (StepTwoValid) {
          const data = await registerNewUser(watch())

          if (data.status === 200) {
            await toast.promise(
              () => signIn(watch('phone'), watch('password')),
              {
                error: t('notification.password-or-phone-incorrect'),
                success: t('notification.authenticated'),
                pending: t('notification.auth-pending'),
              },
            )
            replace(callbackUrl)
          }
        }
        break
    }
  }

  return (
    <div className='flex h-full flex-col justify-between '>
      <ProgressBar currentStep={currentStep + 1} steps={4} />
      <div className='h-full min-h-[500px]'>{getCurrentStep()}</div>
      <div className=''>
        <div className='flex justify-end gap-2'>
          {currentStep !== 0 && (
            <Button
              text={t('button.prev')}
              theme='secondary'
              onClick={() => setCurrentStep(prev => prev - 1)}
            />
          )}
          <Button
            width={currentStep === 0 ? '49%' : '100%'}
            text={currentStep !== 3 ? t('button.next') : t('button.submit')}
            onClick={handleNextClick}
          />
        </div>
        <div className='flex justify-center gap-1'>
          {t('auth.already-have-account')}
          <Link text={t('auth.login')} url='/login' />
        </div>
      </div>
    </div>
  )
}
