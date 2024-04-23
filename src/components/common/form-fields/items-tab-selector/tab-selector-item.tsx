import {TouchableOpacity} from 'react-native';
import React from 'react';
import {cn} from '../../../../../utils';
import {TranslatedText} from '../..';

type Props = {
  selected: boolean;
  handleSelect: (item: any) => any;
  text: string;
};

export default function TabSelectorItem({handleSelect, selected, text}: Props) {
  return (
    <TouchableOpacity
      onPress={handleSelect}
      className={cn(
        'px-3 py-2 rounded ',
        selected ? 'bg-main ' : 'bg-background dark:bg-backgroundDark',
      )}>
      <TranslatedText
        className={cn(
          selected ? 'text-background dark:text-backgroundDark' : 'text-main ',
        )}
        tranlationKey={text}
      />
    </TouchableOpacity>
  );
}
