export const routes = [
  {
    id: 1,
    text: "header.home",
    link: "/",
    super: true,
  },
  {
    id: 2,
    text: "header.products",
    super: false,
    items: [
      {
        id: 1,
        text: "header.services",
        link: "/services",
      },
      {
        id: 2,
        text: "header.jobs-in-germany",
        link: "/jobs",
      },
    ],
  },
  {
    id: 3,
    text: "header.contact",
    link: "/contact",
    super: true,
  },
  {
    id: 4,
    text: "header.become-provider",
    link: "/become-provider",
    super: true,
  },
];
