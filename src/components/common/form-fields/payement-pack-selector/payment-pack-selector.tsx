import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Control, useController} from 'react-hook-form';
import {TranslatedHeading, TranslatedText} from '../../translated-text';
import {cn} from '../../../../../utils';
import {useColorScheme} from 'nativewind';

type Props = {
  control: Control<any>;
  name: string;
  disabled?: boolean;
};

const packs = [
  {
    id: 1,
    title: 'Basic',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      {text: 'Review and optimisation of application documents.', super: true},
      {text: 'Personal support and assistance from our experts.', super: true},
      {text: 'Job interviews', qte: 'x1'},
      {
        text: 'Video call counselling before every interview',
        qte: 'x0',
      },
    ],
    price: 1500,
  },
  {
    id: 2,
    title: 'Standard',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      {text: 'Review and optimisation of application documents.', super: true},
      {text: 'Personal support and assistance from our experts.', super: true},
      {text: 'Job interviews', qte: 'Unlimited'},
      {
        text: 'Video call counselling before every interview',
        qte: 'x3',
      },
    ],
    price: 2500,
  },
  {
    id: 3,
    title: 'Premium',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      {text: 'Review and optimisation of application documents.', super: true},
      {text: 'Personal support and assistance from our experts.', super: true},
      {text: 'Job interviews', qte: 'Unlimited'},

      {
        text: 'Video call counselling before every interview',
        qte: 'Unlimited',
      },
    ],
    price: 3500,
  },
];

export function PaymentPackSelector({control, name, disabled}: Props) {
  const {
    field: {onChange, value: selected},
  } = useController({
    control,
    name,
    defaultValue: disabled ? undefined : packs[1].id,
  });

  const {colorScheme} = useColorScheme();
  const isDark = React.useMemo(() => colorScheme === 'dark', [colorScheme]);

  return (
    <View className={cn(disabled ? 'opacity-50' : '')}>
      <View className="py-2 flex-row justify-evenly rounded-xl bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
        {React.Children.toArray(
          packs.map(pack => (
            <TouchableOpacity
              onPress={() => {
                if (!disabled) {
                  onChange(pack.id);
                }
              }}
              className={cn(
                'p-3 w-[30%] items-center rounded ',
                selected === pack.id
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundDark',
              )}>
              <TranslatedHeading
                className={cn(
                  'text-md',
                  selected === pack.id ? 'text-main dark:text-secondary' : '',
                )}
                tranlationKey={pack.title}
              />
            </TouchableOpacity>
          )),
        )}
      </View>
      <View className="mt-2 rounded-xl bg-backgroundSecondary dark:bg-backgroundSecondaryDark p-4">
        {React.Children.toArray(
          packs[selected - 1].offers.map(item => (
            <View className="flex-row my-2">
              <TranslatedText
                className="text-xs w-[70%] font-bold"
                tranlationKey={item.text}
              />
              <View className="absolute top-0 -right-2">
                {item?.super ? (
                  <Image
                    className="w-2.5 h-2.5 mr-2 mt-[3px]"
                    source={
                      isDark
                        ? require('../../../../assets/icons/light/checkbox.png')
                        : require('../../../../assets/icons/dark/checkbox.png')
                    }
                  />
                ) : (
                  <TranslatedText
                    tranlationKey={item.qte || ''}
                    className="text-secondary dark:text-main font-bold text-xs mr-2"
                  />
                )}
              </View>
            </View>
          )),
        )}
        <TranslatedText
          className="text-secondary dark:text-main text-center font-bold text-xl mt-3"
          tranlationKey={`${packs[selected - 1].price} DH`}
        />
      </View>
    </View>
  );
}
