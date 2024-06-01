import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

export async function ResumeeViewer() {
  const t = await getScopedI18n('resumee');

  const infos = [
    {
      label: t('category'),
      value: 'Web Analyst',
      icon: require('@/assets/images/icons/light/work.svg'),
      darkIcon: require('@/assets/images/icons/dark/work.svg'),
    },
    {
      label: t('education'),
      value: 'Master Degree',
      icon: require('@/assets/images/icons/light/education.svg'),
      darkIcon: require('@/assets/images/icons/dark/education.svg'),
    },
    {
      label: t('languages'),
      value: 'English, German, Frensch',
      icon: require('@/assets/images/icons/light/languages.svg'),
      darkIcon: require('@/assets/images/icons/dark/languages.svg'),
    },
    {
      label: t('experience'),
      value: '> 3 Years',
      icon: require('@/assets/images/icons/light/experience.svg'),
      darkIcon: require('@/assets/images/icons/dark/experience.svg'),
    },
  ];

  const experiences = [
    {
      startDate: new Date(2022, 10, 12),
      endDate: new Date(2023, 10, 12),
      company: 'Philips',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    },
    {
      startDate: new Date(2021, 1, 12),
      endDate: new Date(2024, 3, 12),
      company: 'BMW',
      tasks: ['Task 1', 'Task 2'],
    },
  ];
  const educations = [
    {
      startDate: new Date(2022, 10, 12),
      endDate: new Date(2023, 10, 12),
      school: 'university Hassan 2',
      grade: 'Master in physics ',
    },
    {
      startDate: new Date(2022, 10, 12),
      endDate: new Date(2023, 10, 12),
      school: 'university Mohamed 5',
      grade: 'Bachelor in physics ',
    },
  ];
  const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'skill 4'];

  return (
    <div>
      <div className='flex items-start justify-between'>
        <div className='flex flex-col gap-6 text-secondary dark:text-textdark'>
          <div className=''>
            <div className='text-xbase'>
              <Heading heading={t('work-experience')} />
            </div>
            <div className='ml-4 mt-6 flex flex-col gap-4  text-sm'>
              {React.Children.toArray(
                experiences.map((item) => (
                  <div className=''>
                    <div className='text-base font-semibold'>
                      {moment(item.startDate).format('MMMM DD') +
                        ' - ' +
                        moment(item.endDate).format('MMMM DD')}
                    </div>
                    <div className='my-2 font-bold capitalize'>
                      {item.company}
                    </div>
                    <ul className='ml-6 list-disc'>
                      {React.Children.toArray(
                        item.tasks.map((task) => <li className=''>{task}</li>)
                      )}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className=''>
            <div className='text-xbase'>
              <Heading heading={t('education-level')} />
            </div>
            <div className='ml-4 mt-6 flex flex-col gap-4  text-sm'>
              {React.Children.toArray(
                educations.map((item) => (
                  <div className=''>
                    <div className='text-base font-semibold'>
                      {moment(item.startDate).format('MMMM DD') +
                        ' - ' +
                        moment(item.endDate).format('MMMM DD')}
                    </div>
                    <div className='my-2 font-bold capitalize'>
                      {item.school}
                    </div>
                    <div className=''>{item.grade}</div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className=''>
            <div className='text-xbase'>
              <Heading heading={t('skills')} />
            </div>
            <ul className='ml-10 mt-6 list-disc'>
              {React.Children.toArray(
                skills.map((skill) => <li className=''>{skill}</li>)
              )}
            </ul>
          </div>
        </div>
        <div className='rounded-lg border-[1px] border-secondary p-4 text-secondary dark:border-border dark:text-textdark'>
          <div className='flex items-center gap-4'>
            <Image
              width={200}
              height={200}
              alt=''
              src='/job-image.jpg'
              className='aspect-square w-[100px] rounded'
            />
            <div className='flex w-full flex-col gap-1'>
              <h3 className='text-base font-bold'>Mohammed El Maaroufi</h3>
              <p className='text-sm'>30. Mai 1998 in Casablanca</p>
              <p className='text-sm'>Morocco</p>
            </div>
          </div>
          <div className='mt-12 flex flex-col gap-6'>
            {React.Children.toArray(
              infos.map((item) => (
                <div className='flex gap-4'>
                  <div className=''>
                    <Image
                      alt={item.label}
                      src={item.icon}
                      className='w-[50px] dark:hidden sm:w-[24px]'
                    />
                    <Image
                      alt={item.label}
                      src={item.darkIcon}
                      className='hidden w-[50px] dark:block sm:w-[24px]'
                    />
                  </div>
                  <div className=''>
                    <div className='text-sm font-bold'>{item.label}</div>
                    <p className='text-xs'>{item.value}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
