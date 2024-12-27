export const routes: {
  id: number
  text: 'services' | 'courses' | 'career' | 'home'
  link: string
  super: boolean
  items?: {
    label:
      | 'application'
      | 'visa'
      | 'interview'
      | 'contract'
      | 'jobs'
      | 'interview-coaching'
      | 'training'
    link: string
  }[]
}[] = [
  {
    id: 1,
    text: 'home',
    link: '/',
    super: true,
  },
  {
    id: 2,
    text: 'career',
    link: '/jobs',
    super: false,
    items: [
      {
        label: 'jobs',
        link: '/profile/jobs?tab=jobs',
      },
      {
        label: 'training',
        link: '/trainings-overview',
      },
    ],
  },
  {
    id: 3,
    text: 'courses',
    link: '/services/german-courses',
    super: true,
  },
  {
    id: 4,
    text: 'services',
    link: '/services/application',
    super: false,
    items: [
      {
        label: 'application',
        link: '/services/application',
      },
      {
        label: 'interview',
        link: '/services/job-interview',
      },
      {
        label: 'interview-coaching',
        link: '/services/interview-coaching',
      },
      {
        label: 'contract',
        link: '/services/contract-negotiation',
      },
      {
        label: 'visa',
        link: '/services/visa',
      },
    ],
  },
]
