import { Heading, TextToggle } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export async function PacksFaqs() {
  const t = await getI18n();

  return (
    <div className='mt-12'>
      <div className='container'>
        <div className='text-secondary dark:text-main'>
          <Heading className='text-xxm' heading={t('faq-abbr')} />
        </div>
        <h4 className='my-6 text-text dark:text-textdark'>
          {t('faq-heading')}
        </h4>
        <div className='flex flex-col gap-5'>
          <TextToggle
            isOpen
            answer='There are various opportunities for prospective apprentices in the German job market. The following industries offer particularly promising prospects: <br> <ul><li>Nursing</li><li>Chef</li><li>Driver</li><li>Hosptality</li><li>Mechanics</li><li>Electrical engeneering</li></ul>'
            question='In which industries do I have good chances of finding an apprenticeship position in Germany?'
          />
          <TextToggle
            answer='There are various opportunities for prospective apprentices in the German job market. The following industries offer particularly promising prospects: <br> <ul><li>Nursing</li><li>Chef</li><li>Driver</li><li>Hosptality</li><li>Mechanics</li><li>Electrical engeneering</li></ul>'
            question='In which industries do I have good chances of finding an apprenticeship position in Germany?'
          />
          <TextToggle
            answer='There are various opportunities for prospective apprentices in the German job market. The following industries offer particularly promising prospects: <br> <ul><li>Nursing</li><li>Chef</li><li>Driver</li><li>Hosptality</li><li>Mechanics</li><li>Electrical engeneering</li></ul>'
            question='In which industries do I have good chances of finding an apprenticeship position in Germany?'
          />
          <TextToggle
            answer='There are various opportunities for prospective apprentices in the German job market. The following industries offer particularly promising prospects: <br> <ul><li>Nursing</li><li>Chef</li><li>Driver</li><li>Hosptality</li><li>Mechanics</li><li>Electrical engeneering</li></ul>'
            question='In which industries do I have good chances of finding an apprenticeship position in Germany?'
          />
        </div>
      </div>
    </div>
  );
}
