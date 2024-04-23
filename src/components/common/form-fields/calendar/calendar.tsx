/* eslint-disable react-native/no-inline-styles */
import {Image, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Button, Modal, TranslatedHeading, TranslatedText} from '../..';
import {useColorScheme} from 'nativewind';
import colors from '../../../../../../configs/colors';
import {DateData, MarkedDates} from 'react-native-calendars/src/types';
import {Control, useController} from 'react-hook-form';
import {useLangStore} from '../../../../stores';
import {cn} from '../../../../../utils';

type Props = {
  control: Control<any>;
  label: string;
  name: string;
};

export function CalendarField({control, name, label}: Props) {
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);

  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const {currentLang} = useLangStore();
  const {colorScheme} = useColorScheme();
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  const isArabLang = useMemo(() => currentLang === 'ar', [currentLang]);

  const getFirstDay = (): string => {
    let min = value[0];
    if (value.length <= 1) {
      return min;
    }
    value.map((day: string) => {
      if (compareTwoDates(day, min) === -1) {
        min = day;
      }
    });
    return min;
  };

  function compareTwoDates(firstDate: string, secondDate: string) {
    const date1 = firstDate.split('-');
    const date2 = secondDate.split('-');

    if (date1[0] > date2[0]) {
      return 1;
    } else if (date1[0] < date2[0]) {
      return -1;
    } else if (date1[1] > date2[1]) {
      return 1;
    } else if (date1[1] < date2[1]) {
      return -1;
    } else if (date1[2] > date2[2]) {
      return 1;
    } else {
      return -1;
    }
  }

  const getLastDay = (): string => {
    let max = value[0];
    if (value.length <= 1) {
      return max;
    }
    value.map((day: string) => {
      if (compareTwoDates(day, max) === 1) {
        max = day;
      }
    });
    return max;
  };

  const getMarkedDates = (dates: string[]): MarkedDates => {
    let marked = {};

    dates.map(date => {
      // @ts-ignore
      return (marked[date] = {
        selected: true,
        selectedDotColor: 'transparent',
        color:
          date === getFirstDay() || date === getLastDay()
            ? isDark
              ? colors.main
              : colors.secondary
            : `${isDark ? colors.main : colors.secondary}30`,
        startingDay: date === getFirstDay(),
        endingDay: date === getLastDay(),
      });
    });
    return marked;
  };

  function getDates(startDate: Date, endDate: Date) {
    const dayInterval = 1000 * 60 * 60 * 24;
    const duration = endDate.getTime() - startDate.getTime();
    const steps = duration / dayInterval;
    return Array.from({length: steps + 1}, (v, i) =>
      new Date(startDate.valueOf() + dayInterval * i)
        .toISOString()
        .slice(0, 10),
    );
  }

  function handleDayPress(day: DateData) {
    if (value.length < 1) {
      onChange([day.dateString]);
    } else {
      const last =
        new Date(day.dateString) > new Date(getLastDay())
          ? day.dateString
          : getLastDay();

      const first =
        new Date(day.dateString) < new Date(getFirstDay())
          ? day.dateString
          : getFirstDay();

      onChange(getDates(new Date(first), new Date(last)));
    }
  }

  const calculatePeriod = () => {
    let placeholder = '';
    if (value.length === 0) {
      return undefined;
    }
    if (value.length > 1) {
      placeholder = `[${getFirstDay()}...${getLastDay()}]`;
    } else {
      placeholder = `[${value[0]}]`;
    }

    return placeholder;
  };

  return (
    <>
      <View>
        <TranslatedHeading
          tranlationKey={label}
          className="text-sm text-secondary dark:text-main mb-1"
        />
        <TouchableOpacity
          className={cn(
            'rounded-md justify-between py-3 px-4 bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
            isArabLang ? 'flex-row-reverse' : 'flex-row',
          )}
          onPress={() => setOpenCalendar(prev => !prev)}>
          <TranslatedText
            tranlationKey={calculatePeriod() || 'select-period-text'}
          />
          <Image
            className={cn(
              'w-[24px] h-[24px]',
              isArabLang ? 'left-2' : 'right-2 ',
            )}
            source={
              isDark
                ? require('../../../../assets/icons/dark/calendar.png')
                : require('../../../../assets/icons/light/calendar.png')
            }
          />
        </TouchableOpacity>
        <TranslatedText
          tranlationKey={error?.message || ''}
          className="h-[15px] pl-1 text-[10px] text-error"
        />
      </View>

      <Modal
        className="max-h-[75%]"
        header="select-period-text"
        visible={openCalendar}
        setVisible={setOpenCalendar}>
        <Calendar
          style={{borderRadius: 12}}
          onDayPress={handleDayPress}
          markedDates={getMarkedDates(value)}
          markingType="period"
          theme={{
            calendarBackground: isDark
              ? colors.backgroundSecondaryDark
              : colors.backgroundSecondary,
            contentStyle: {
              borderRadius: 10,
            },
            selectedDayBackgroundColor: isDark ? colors.main : colors.secondary,
            selectedDayTextColor: colors.success,
            dayTextColor: isDark ? colors.textdark : colors.text,
          }}
        />
        <View className="mt-2 flex-row justify-between">
          <Button
            theme="tertiary"
            className="max-w-[49%]"
            handler={() => onChange([])}
            text="reset-button-text"
          />
          <Button
            className="max-w-[49%]"
            handler={() => setOpenCalendar(false)}
            text="validate-button-text"
          />
        </View>
      </Modal>
    </>
  );
}
