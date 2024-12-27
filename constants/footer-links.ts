export const footerLinks: {
  id: number
  section:
    | 'section.platform'
    | 'section.blanzin'
    | 'section.support'
    | 'section.apps'
  items: {
    id: number
    icon?: any
    darkIcon?: any
    label:
      | 'links.trainee-in-germany'
      | 'links.jobs-in-germany'
      | 'links.about-us'
      | 'links.privacy-policy'
      | 'links.customer-policy'
      | 'links.blog'
      | 'links.contact-us'
      | 'links.feedback'
      | 'links.app-store'
      | 'links.play-store'
      | 'links.faq'
    link: string
  }[]
}[] = [
  {
    id: 1,
    section: 'section.platform',
    items: [
      {
        id: 13,
        label: 'links.trainee-in-germany',
        link: '/profile/jobs?tab=trainings',
      },
      {
        id: 14,
        label: 'links.jobs-in-germany',
        link: '/profile/jobs?tab=jobs',
      },
    ],
  },
  {
    id: 2,
    section: 'section.blanzin',
    items: [
      { id: 21, label: 'links.about-us', link: '/about' },
      { id: 22, label: 'links.blog', link: '/blog' },
      { id: 23, label: 'links.privacy-policy', link: '/privacy-policy' },
      { id: 24, label: 'links.customer-policy', link: '/customer-policy' },
      { id: 25, label: 'links.faq', link: '/faq' },
    ],
  },
  {
    id: 3,
    section: 'section.support',
    items: [
      { id: 11, label: 'links.contact-us', link: '/contact' },
      { id: 12, label: 'links.feedback', link: '/feedback' },
    ],
  },
  {
    id: 4,
    section: 'section.apps',
    items: [
      {
        id: 1,
        label: 'links.app-store',
        link: '',
        icon: require('@/assets/images/icons/light/appstore.svg'),
        darkIcon: require('@/assets/images/icons/dark/appstore.svg'),
      },
      {
        id: 2,
        label: 'links.play-store',
        link: '',
        icon: require('@/assets/images/icons/light/playstore.svg'),
        darkIcon: require('@/assets/images/icons/dark/playstore.svg'),
      },
    ],
  },
]
