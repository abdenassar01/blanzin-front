import * as React from 'react';
import {Image, View} from 'react-native';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';
import {TranslatedText} from '../translated-text';
import {cn} from '../../../../utils';
import {useColorScheme} from 'nativewind';
import {useMemo} from 'react';

export function ToastMessageBox({message, type, icon}: ToastProps) {
  const {colorScheme} = useColorScheme();
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const getBackgroundColorClassName = () => {
    switch (type) {
      case 'danger':
        return 'bg-error';
      case 'success':
        return 'bg-success';
      case 'warning':
        return 'bg-warn';
      default:
        return 'bg-secondary dark:bg-main';
    }
  };

  const getBorderColorClassName = () => {
    switch (type) {
      case 'danger':
        return 'border-error';
      case 'success':
        return 'border-success';
      case 'warning':
        return 'border-warn';
      default:
        return 'border-secondary dark:border-main';
    }
  };

  return (
    <View
      className={cn(
        'w-[90%] my-1 rounded-md p-2 flex-row items-center bg-backgroundSecondary dark:bg-backgroundSecondaryDark border-[1px]',
        getBorderColorClassName(),
      )}>
      {icon || (
        <Image
          className="w-7 h-7"
          source={
            isDark
              ? require('../../../assets/icons/logo/logo-dark.png')
              : require('../../../assets/icons/logo/logo.png')
          }
        />
      )}
      <View
        className={cn('w-1 h-full mx-1 rounded', getBackgroundColorClassName())}
      />

      {typeof message === 'string' && (
        <TranslatedText
          className={cn(
            'w-[80%]',
            type === 'warning'
              ? 'text-black'
              : 'text-backgroundSecondaryDark dark:text-white',
          )}
          tranlationKey={message}
        />
      )}
      {type === 'danger' ? (
        <Image
          className="w-4 h-4 absolute right-2 rotate-45"
          source={
            isDark
              ? require('../../../assets/icons/dark/plus.png')
              : require('../../../assets/icons/light/plus.png')
          }
        />
      ) : (
        <Image
          className="w-4 h-4 absolute right-2"
          source={
            isDark
              ? require('../../../assets/icons/light/checkbox.png')
              : require('../../../assets/icons/dark/checkbox.png')
          }
        />
      )}
    </View>
  );
}
