import {
  Button,
  LatestOrderSlider,
  Map,
  OrderStats,
  ProviderProfileWidget,
} from '@/components';
import Image from 'next/image';
import React from 'react';

export default function OrderDetails() {
  return (
    <div className='my-12'>
      <div className='container'>
        <div className='flex justify-between  sm:flex-col-reverse'>
          <div className='sm:full w-[69%]'>
            <div className=''>
              <Image
                className='w-full rounded-xl'
                alt='title'
                src={require('@/assets/images/job-image.jpg')}
              />
              <div className='mt-4 w-full rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
                <div className='flex items-center gap-4'>
                  <Button text='Send Offer' />
                  <div className=''>
                    <Image
                      className='w-[2vw] sm:w-[6vw]'
                      alt='blanzin favourite'
                      src={require('@/assets/images/icons/dark/favourite.svg')}
                    />
                  </div>
                </div>
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
          <div className='sm:full w-[30%] rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
            <div className='text-xbase font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis odit et voluptas
            </div>
            <div className='my-4 flex flex-col gap-2'>
              <OrderStats date='20-12-2024' location='Casablanca' price={250} />
            </div>
            <ProviderProfileWidget />
          </div>
        </div>
        <div className='mt-2  gap-2 rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
          <LatestOrderSlider />
        </div>
      </div>
    </div>
  );
}
