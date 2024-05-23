import { Heading } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function CustomerPolicyPage() {
  const t = await getI18n();

  return (
    <div className='w-full'>
      <div className='text-secondary'>
        <Heading
          className='text-center text-xxm'
          heading={t('links.customer-policy')}
        />
      </div>
      <div
        className='container prose text-text prose-p:text-center prose-a:text-[#16b8f8] prose-strong:text-xbase prose-strong:text-secondary dark:text-textdark dark:prose-strong:text-main'
        dangerouslySetInnerHTML={{
          __html:
            '<div className=`w-full`><p><strong>Big Title</strong></p></p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio   fugit facere dolor, accusamus, minus corporis culpa doloribus maiores ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet  pariatur quisquam.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio  fugit facere dolor, accusamus, minus corporis culpadoloribus maiores ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet pariatur quisquam.Lorem ipsumdolor sit amet consectetur, adipisicing elit. Excepturi odio  fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet pariatur quisquam.Loremipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet pariatur quisquam.Loremipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam.Loremipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam.</p><p>blanzin.ma</p><p>&nbsp;</p><p><strong>Second title in middle of page</strong></p><p>&nbsp;</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpadoloribus maiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpadoloribus maiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; pariatur quisquam.Lorem ipsumdolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam.Loremipsum dolor sit amet consectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribusmaiores &nbsp; &nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet pariatur quisquam.Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribus maiores &nbsp; nbsp; &nbsp; ipsam a corrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam.Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Excepturi odio &nbsp; &nbsp; &nbsp; fugit facere dolor, accusamus, minus corporis culpa doloribus maiores ipsam acorrupti doloremque veritatis deleniti voluptatibus omnis amet &nbsp; &nbsp; &nbsp; pariatur quisquam.</p><a  href=/profile/account>blanzin.ma</a></div>',
        }}
      />
    </div>
  );
}
