import {TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {cn} from '../../../../../utils';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useLangStore} from '../../../../stores';

type Props = {
  active: boolean;
  onActiveChange: () => any;
};

export function Switch({active, onActiveChange}: Props) {
  const {currentLang} = useLangStore();
  const isArabicLang = useMemo(() => currentLang === 'ar', [currentLang]);

  const left = useSharedValue(`${active ? 45 : 0}%`);
  const config = {
    duration: 1500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle<any>(() => {
    return {
      left: withSpring(left.value, config),
    };
  });

  useEffect(() => {
    left.value = `${active ? 45 : 0}%`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <TouchableOpacity
      onPress={onActiveChange}
      className={cn(
        'h-[30px] w-[55px] rounded-full',
        isArabicLang ? 'scale-x-[-1]' : '',
        active ? 'bg-secondary' : 'bg-backgroundDark',
      )}>
      <Animated.View
        style={style}
        className={cn(
          'absolute h-[30px] w-[30px] bg-main rounded-full',
          active ? 'left-0' : 'left-0 ',
        )}
      />
    </TouchableOpacity>
  );
}
