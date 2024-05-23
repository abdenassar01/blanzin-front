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
  const suggestionsT = useScopedI18n('suggestions');

  return (
    <div className='mb-10 flex flex-col gap-4 overflow-y-scroll'>
      <DescriptionField
        control={control}
        items={['Team Work', 'Skill2']}
        label={t('personal-skills')}
        name='personalSkills'
        suggestions={personalSkills}
        placeholder={suggestionsT('free-text')}
        suggestionsLabel={suggestionsT('skill')}
        valuesLabel={suggestionsT('skill-value')}
      />
      <DescriptionField
        control={control}
        items={['Copyrighting', 'Arabic', 'English', 'Frensh']}
        label={t('language-skills')}
        name='languageSkills'
        suggestions={languageSkills}
        placeholder={suggestionsT('free-text')}
        suggestionsLabel={suggestionsT('skill')}
        valuesLabel={suggestionsT('skill-value')}
      />
    </div>
  );
}
