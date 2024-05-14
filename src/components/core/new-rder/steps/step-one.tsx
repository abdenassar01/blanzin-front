import { CategorySelector } from '@/components';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control;
  setCurrentStep: (step: number) => void;
  label?: string;
};

export function StepOne({ control, setCurrentStep, label }: Props) {
  return (
    <div className='animate-enter pt-12'>
      <div className='text-center text-xm text-secondary dark:text-main'>
        {label}
      </div>
      <CategorySelector
        control={control}
        callback={() => setCurrentStep(2)}
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
        name='category'
        label=''
      />
    </div>
  );
}
