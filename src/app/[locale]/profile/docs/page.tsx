import {
  DocsFilter,
  DocumentViewerWithModal,
  Heading,
  Map,
  Modal,
  PdfViewer,
} from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';
import { isMobile } from 'react-device-detect';

export default async function MyDocumentsPage({
  searchParams: { doc },
}: {
  searchParams: { doc: string };
}) {
  const t = await getScopedI18n('profile');

  const applicationT = await getScopedI18n('application');

  function getDocTitle() {
    switch (doc) {
      case 'lang':
        return applicationT('lang-certificate');
      case 'jobs':
        return applicationT('job-certificates');
      case 'diploma':
        return applicationT('diploma');
      case 'intenship':
        return applicationT('intenship');
      case 'acknowledgement':
        return applicationT('acknowledgement');
      default:
        return '';
    }
  }

  return (
    <div className='min-h-[40vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('docs')} />
      </div>
      <div className='mt-4 flex border-[1px] border-border'>
        <DocsFilter />
        <div className='p-3'>
          <div className='text-xxl'>
            <Heading heading={getDocTitle()} />
          </div>
          <div className='mt-6 flex flex-wrap gap-4'>
            {
              <Map
                items={[1, 2, 3, 4, 5]}
                render={(item) => (
                  <DocumentViewerWithModal doc='/blanzin.pdf' />
                )}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
