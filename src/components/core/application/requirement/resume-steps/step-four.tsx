import { DescriptionField, LanguagesField } from '@/components';
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
  const resumeT = useScopedI18n('resume');

  const { languages } = useWatch({ control });

  return (
    <div className='mb-10 flex flex-col gap-4 overflow-y-scroll'>
      <div className='my-3'>
        <div className='text-xm text-secondary'>{resumeT('skills')}</div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-three-text')}
        </div>
      </div>
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
      <LanguagesField
        items={languages}
        extractDisplayString={(item: any) => `${item.language} - ${item.level}`}
        extractLanguage={(item) => item.language}
        control={control}
        name='languages'
        label={t('language-skills')}
      />
    </div>
  );
}
