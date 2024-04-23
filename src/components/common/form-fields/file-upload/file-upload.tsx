import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Control, useController} from 'react-hook-form';
import {TranslatedHeading, TranslatedText} from '../..';
import {MainText} from '../../..';
import DocumentPicker, {types} from 'react-native-document-picker';
import {cn} from '../../../../../utils';

type Props = {
  control: Control;
  name: string;
  label: string;
  className?: string;
};

export function FileUpload({label, control, name, className}: Props) {
  const handleUploadImage = () => {
    DocumentPicker.pickSingle({
      type: types.pdf,
    }).then(file => onChange(file));
  };

  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    name,
    control,
  });

  return (
    <View>
      <TranslatedHeading
        className="text-sm text-secondary dark:text-main mb-1"
        tranlationKey={label}
      />
      <TouchableOpacity
        onPress={handleUploadImage}
        className={cn(
          'bg-background dark:bg-backgroundDark items-center p-2 rounded flex-row justify-between',
          className,
        )}>
        <TranslatedText
          className="max-w-[90%]"
          tranlationKey={
            (value && value.name) || 'trainee-documents-upload-placeholder'
          }
        />
        <Image
          className="w-[30px] h-[30px]"
          source={require('../../../../assets/icons/dark/upload.png')}
        />
      </TouchableOpacity>
      <MainText className="text-error text-xs">{error?.message}</MainText>
    </View>
  );
}
