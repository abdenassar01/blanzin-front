import { CategorySelector } from '@/components';
import { cn } from '@/utils';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
  setCurrentStep: (step: number) => void;
  label?: string;
  isBack: boolean;
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>;
};

export function StepThree({
  control,
  setCurrentStep,
  label,
  setIsBack,
  isBack,
}: Props) {
  return (
    <div
      className={cn(
        'absolute w-full pt-6',
        isBack ? 'animate-leave' : 'animate-enter'
      )}
    >
      <div className='text-center text-xm text-secondary dark:text-main'>
        {label}
      </div>
      <CategorySelector
        control={control}
        callback={() => {
          setCurrentStep(4);
          setIsBack(false);
        }}
        items={[
          { id: 1, label: 'Category1', icon: '/category.png' },
          { id: 2, label: 'Category1', icon: '/category.png' },
          { id: 3, label: 'Category1', icon: '/category.png' },
          { id: 4, label: 'Category1', icon: '/category.png' },
          { id: 5, label: 'Category1', icon: '/category.png' },
        ]}
        extractDisplayMember={(item) => item.label}
        extractValue={(item) => item.id}
        extractIcon={(item) => item.icon}
        name='childSubCategory'
        label=''
      />
    </div>
  );
}
