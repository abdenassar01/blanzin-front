import { Heading, TextToggle } from '@/components';
import { getI18n } from '@/utils/locales/server';
import Image from 'next/image';
import React from 'react';

export default async function FAQ() {
  const t = await getI18n();
  return (
    <div className="bg-[url('/background.svg')] py-12">
      <div className='container flex gap-4 sm:flex-wrap'>
        <div className='w-full'>
          <Heading className='text-2xl' heading={t('links.faq')} />
          <Image
            alt='Blanzin Faq'
            src='/faq.png'
            width={770}
            height={800}
            className='min-w-[30vw] sm:hidden'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <TextToggle
            question='How can I find help with my orders on Blanzin?'
            isOpen
            answer='
            You can easily post an order for free. Simply describe your task, and add pictures if needed, then choose when you want your task to be completed along with a budget. Then sit back, relax and wait for the offers to come to you. Choose the best offer that suits you and get your task done.'
          />
          <TextToggle
            question='How can I find help with my orders on Blanzin?'
            answer='
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Alias voluptatibus, aspernatur laudantium, nam distinctio reprehenderit repellat iste accusantium natus totam beatae commodi qui ipsam provident amet esse rerum.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Alias voluptatibus, aspernatur laudantium, nam distinctio reprehenderit repellat iste accusantium natus totam beatae commodi qui ipsam provident amet esse rerum.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Alias voluptatibus, aspernatur laudantium, nam distinctio reprehenderit repellat iste accusantium natus totam beatae commodi qui ipsam provident amet esse rerum.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Alias voluptatibus, aspernatur laudantium, nam distinctio reprehenderit repellat iste accusantium natus totam beatae commodi qui ipsam provident amet esse rerum.
'
          />
          <TextToggle
            question='How can I find help with my orders on Blanzin?'
            answer='
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsam. Alias voluptatibus, aspernatur laudantium, nam distinctio reprehenderit repellat iste accusantium natus totam beatae commodi qui ipsam provident amet esse rerum.
'
          />
        </div>
      </div>
    </div>
  );
}
