import React, { useMemo } from 'react';

import { TranslatedText } from '../..';
import { cn } from '@/utils';

type Props = {
  onClick?: () => void;
  text?: string;
  className?: string;
  textClassName?: string;
  width?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warn' | 'success';
};

export const Button = ({
  onClick,
  text,
  width,
  className,
  textClassName,
  theme = 'primary',
  children,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: width || '100%' }}
      className={cn(
        'group items-center justify-center rounded-xl border-[1px] border-main p-3 transition-all ease-in-out',

        theme === 'primary'
          ? 'bg-main text-secondary hover:border-main hover:bg-[transparent] hover:text-main'
          : theme === 'secondary'
            ? 'border-secondary bg-secondary hover:border-secondary hover:bg-[transparent]'
            : theme === 'success'
              ? 'border-success bg-success hover:bg-[transparent]'
              : theme === 'tertiary'
                ? 'border-[1px] font-bold hover:bg-[transparent]'
                : theme === 'warn'
                  ? 'border-warn bg-warn hover:bg-[transparent]'
                  : 'border-error bg-error hover:bg-[transparent]',
        className
      )}
    >
      {children ? (
        children
      ) : (
        <TranslatedText
          className={cn(
            'font-medium group-hover:text-main',
            theme === 'error'
              ? 'group-hover:text-error'
              : theme === 'success'
                ? 'text-white group-hover:text-success'
                : theme === 'secondary' || theme === 'tertiary'
                  ? 'text-main group-hover:text-secondary'
                  : theme === 'primary'
                    ? 'text-secondary '
                    : 'text-white',
            textClassName
          )}
          tranlationKey={text || ''}
        />
      )}
    </button>
  );
};
