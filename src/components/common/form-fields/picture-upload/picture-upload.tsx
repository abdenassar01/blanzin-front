import {TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {UseFieldArrayAppend} from 'react-hook-form';

type Props = {
  children: ReactNode;
  append: UseFieldArrayAppend<any, string>;
  callBack?: () => any;
};

export function PictureUpload({children, append, callBack}: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        ImageCropPicker.openPicker({
          mediaType: 'photo',
          cropping: true,
        })
          .then(photo => {
            append(photo);
            callBack && callBack();
          })
          .catch(err => console.log(err));
      }}>
      {children}
    </TouchableOpacity>
  );
}
