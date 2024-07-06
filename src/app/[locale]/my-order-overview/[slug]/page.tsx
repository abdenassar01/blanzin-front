import {
  Button,
  DeleteOrderModal,
  ExpertOffer,
  Heading,
  OrderImagesSlider,
  OrderStats,
  ProfileWidget,
} from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default async function MyOrderDetails() {
  const t = await getScopedI18n('order');

  return (
    <div className='my-12'>
      <div className='container'>
        <div className='flex items-start justify-between md:flex-col sm:flex-col sm:gap-3'>
          <div className='w-[69%] md:w-full sm:w-full'>
            <div className='w-full'>
              <OrderImagesSlider />
              <div className='mt-4 w-full rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundDark'>
                <article
                  dangerouslySetInnerHTML={{
                    __html:
                      '<p>Lorem ipsum dolor <ul><li>Testing bullet points</li><li>Testing bullet points</li><li>Testing bullet points</li></ul> sit amet consectetur adipisicing elit. Quidemdolor sed temporibus et? Officia praesentium laborum, undetenetur qui nam deleniti aliquam accusamus et est necessitatibusaspernatur ab adipisci doloremque. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quidem dolor sed temporibus et? <h2>hello</h2> Officia praesentium laborum, unde tenetur qui nam delenitialiquam accusamus et est necessitatibus aspernatur ab adipiscidoloremque. Lorem ipsum dolor sit amet consectetur adipisicingelit. Quidem dolor sed temporibus et? Officia praesentiumlaborum, unde tenetur qui nam deleniti aliquam accusamus et estnecessitatibus aspernatur ab adipisci doloremque. Lorem ipsumdolor sit amet consectetur adipisicing elit.<h2>This is a title</h2>Quidem dolor sed temporibus et? Officia praesentium laborum,unde tenetur qui nam deleniti aliquam accusamus et estnecessitatibus aspernatur ab adipisci doloremque. Lorem ipsumdolor sit amet consectetur adipisicing elit. Quidem dolor sedtemporibus et? Officia praesentium laborum, unde tenetur qui namdeleniti aliquam accusamus et est necessitatibus aspernatur abadipisci doloremque.</p>',
                  }}
                  className='prose text-text prose-h2:text-xl prose-h2:text-secondary prose-li:italic dark:text-textdark dark:prose-h2:text-main'
                />
              </div>
            </div>
          </div>
          <div className='w-[30%] rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundDark md:mt-4 md:w-full sm:w-full'>
            <div className='mb-4 flex items-center gap-2'>
              <Link className='w-full' href='/update-order/my-order'>
                <Button className='' text={t('update')} theme='secondary' />
              </Link>
              <DeleteOrderModal text={t('delete')} />
            </div>
            <div className='text-xbase font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis odit et voluptas
            </div>
            <div className='my-4 flex flex-col gap-2'>
              <OrderStats date='20-12-2024' location='Casablanca' price={250} />
            </div>
            <div className='text-secondary'>
              <Heading
                heading={t('applicants')}
                className='mt-12 text-center text-xxl font-bold'
              />
              <ExpertOffer />
              <ExpertOffer />
              <ExpertOffer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
