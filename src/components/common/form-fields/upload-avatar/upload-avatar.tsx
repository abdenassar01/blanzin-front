import {View, Image} from 'react-native';
import React, {ReactNode} from 'react';
import {Button, TranslatedText} from '../..';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Control, useController} from 'react-hook-form';
import {cn} from '../../../../../utils';

type Props = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
  children?: ReactNode;
  className?: string;
  imgClassName?: string;
};

export function UploadAvatar({
  control,
  name,
  defaultValue,
  className,
  imgClassName,
}: Props) {
  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({control, name, defaultValue});

  return (
    <>
      <View className={cn('w-full flex-row items-center my-2', className)}>
        <Image
          defaultSource={require('../../../../assets/icons/avatar.png')}
          className={cn('w-[40%] rounded h-auto aspect-[3/4]', imgClassName)}
          source={{uri: value || 'https://i.imgur.com/W8uILXP.png'}}
        />
        <View className="w-[60%] items-center">
          <Button
            text="forms.upload-photo"
            className="max-w-[80%]"
            handler={() => {
              ImageCropPicker.openPicker({
                mediaType: 'photo',
                cropping: true,
              })
                .then(photo => {
                  onChange(photo.path);
                  console.log(photo);
                })
                .catch(err => console.log(err));
            }}
          />
        </View>
      </View>
      <TranslatedText
        tranlationKey={error?.message || ''}
        className="h-[15px] pl-1 text-[10px] text-error"
      />
    </>
  );
}
