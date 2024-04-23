import * as React from 'react';
import {Control, useController} from 'react-hook-form';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity, View} from 'react-native';
import {cn} from '../../../../../utils';
import {TranslatedHeading, TranslatedText} from '../../translated-text';
import {useMemo, useState} from 'react';
import {useLangStore} from '../../../../stores';
import moment from 'moment';
import {useColorScheme} from 'nativewind';
import colors from '../../../../../../configs/colors';

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  defaultDate?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
};

const currentDate = new Date();
const maxDate = new Date();
const minDate = new Date();
maxDate.setFullYear(currentDate.getFullYear() - 15);
minDate.setFullYear(currentDate.getFullYear() - 60);

export function DatePicker({
  label,
  className,
  name,
  control,
  defaultDate,
  placeholder,
  minimumDate,
  maximumDate,
}: Props) {
  const {currentLang} = useLangStore();
  const isArabicLang = useMemo(() => currentLang === 'ar', [currentLang]);
  const {colorScheme} = useColorScheme();

  const [openDatePicker, setOpenDatePicker] = useState<boolean>();

  const {
    fieldState: {error},
    field: {onChange, value},
  } = useController({
    control,
    name: name,
    defaultValue: defaultDate || maxDate,
  });

  return (
    <View>
      <TranslatedHeading
        className="text-sm text-secondary dark:text-main mb-1"
        tranlationKey={label}
      />
      <TouchableOpacity
        onPress={() => setOpenDatePicker(prev => !prev)}
        className={cn(
          'rounded-md bg-backgroundSecondary w-full pl-2 py-3 text-text dark:bg-backgroundSecondaryDark dark:text-textdark',
          className,
        )}>
        <TranslatedText
          className={cn(
            'text-[13px] px-1 w-full',
            isArabicLang ? 'text-right' : 'text-left',
          )}
          tranlationKey={
            moment(value).format('DD-MM-YYYY') || placeholder || label
          }
        />
      </TouchableOpacity>
      {openDatePicker && (
        <RNDateTimePicker
          themeVariant={colorScheme}
          onChange={(e, date) => {
            onChange(date);
            setOpenDatePicker(false);
          }}
          accentColor={colorScheme === 'dark' ? colors.main : colors.secondary}
          value={value}
          maximumDate={maximumDate || maxDate}
          minimumDate={minimumDate || minDate}
        />
      )}
      <TranslatedText
        className="text-xs text-error"
        tranlationKey={error?.message || ''}
      />
    </View>
  );
}
