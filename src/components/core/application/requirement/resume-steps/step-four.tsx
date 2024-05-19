import { DescriptionField } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, useWatch } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepFour({ control }: Props) {
  const { personalSkills, languageSkills } = useWatch({ control });
  const t = useScopedI18n('forms');
  return (
    <div className='overflow-y-scroll '>
      <DescriptionField
        control={control}
        items={['Team Work', 'Skill2']}
        label={t('personal-skills')}
        name='personalSkills'
        suggestions={personalSkills}
      />
      <DescriptionField
        control={control}
        items={['Copyrighting', 'Arabic', 'English', 'Frensh']}
        label={t('language-skills')}
        name='languageSkills'
        suggestions={languageSkills}
      />
    </div>
  );
}
