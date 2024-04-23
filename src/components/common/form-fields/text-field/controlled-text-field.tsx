import {
  View,
  KeyboardTypeOptions,
  Image,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Control, useController} from 'react-hook-form';
import {TextField, TranslatedHeading} from '../..';
import {cn} from '../../../../../utils';
import {useLangStore} from '../../../../stores';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  className?: string;
  wrapperClassName?: string;
  keyboard?: KeyboardTypeOptions;
  noLabel?: boolean;
  errorCheck?: boolean;
};

export function ControlledTextField({
  control,
  label,
  name,
  defaultValue,
  keyboard,
  className,
  placeholder,
  type,
  wrapperClassName,
  noLabel,
  errorCheck,
  ...props
}: Props & Omit<TextInputProps, 'onChange'>) {
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');

  const {currentLang} = useLangStore();
  const isArabicLang = useMemo(() => currentLang === 'ar', [currentLang]);

  const {
    field: {onBlur, onChange, value},
    fieldState: {error},
  } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });

  return (
    <View className={cn('pt-1 relative', wrapperClassName)}>
      {!noLabel && (
        <TranslatedHeading
          tranlationKey={label}
          className="text-sm text-secondary dark:text-main mb-1"
        />
      )}

      {type === 'password' && (
        <TouchableOpacity
          className={cn(
            'absolute top-[35%] z-20 p-3',
            isArabicLang ? 'left-0' : 'right-0',
          )}
          onPress={() => setIsPassword(prev => !prev)}>
          <Image
            resizeMode="contain"
            className="w-[18px] h-[18px]"
            source={
              isPassword
                ? require('../../../../assets/icons/eye.png')
                : require('../../../../assets/icons/eye-hidden.png')
            }
          />
        </TouchableOpacity>
      )}
      <TextField
        keyboard={keyboard}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        value={value}
        errorCheck={errorCheck}
        onBlur={onBlur}
        isPassword={isPassword}
        error={error?.message}
        type={type}
        {...props}
      />
    </View>
  );
}
