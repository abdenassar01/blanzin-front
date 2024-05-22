import {
  Control,
  RegisterOptions,
  FieldValues,
  FieldPath,
} from 'react-hook-form';

export type FormField<V extends FieldValues> = {
  control: Control<V>;
  name: FieldPath<V>;
  rules?: Omit<
    RegisterOptions<V, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};
