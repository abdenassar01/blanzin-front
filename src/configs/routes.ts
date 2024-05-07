export const routes: {
  id: number;
  text: 'links.home' | 'links.contact-us' | 'links.blog';
  link: string;
  super: boolean;
}[] = [
  {
    id: 1,
    text: 'links.home',
    link: '/',
    super: true,
  },
  {
    id: 2,
    text: 'links.blog',
    link: '/blog',
    super: true,
  },
  {
    id: 3,
    text: 'links.contact-us',
    link: '/contact',
    super: true,
  },
];
