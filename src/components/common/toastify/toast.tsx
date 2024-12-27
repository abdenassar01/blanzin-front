'use client'

import { ToastContainer, Bounce } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { cn } from '@/utils'
import { useTheme } from 'next-themes'

const contextClass: any = {
  success: '!text-success',
  error: '!text-error',
  warn: '!text-main',
  info: '!text-secondary',
  default: '!text-[#3498db]',
}

export const Toast = () => {
  const { theme } = useTheme()

  return (
    <ToastContainer
      position='top-center'
      toastClassName={({ type, defaultClassName }: any) => {
        return cn(
          defaultClassName,
          `${contextClass[type]} !rounded-lg !bg-white`,
        )
      }}
      icon
      theme={theme === 'light' ? 'light' : 'dark'}
      closeButton={false}
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Bounce}
    />
  )
}
