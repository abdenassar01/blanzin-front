export const routes: {
  id: number;
  text:
    | "header.home"
    | "header.service-placement"
    | "header.jobs-in-germany"
    | "header.download";
  link: string;
  super: boolean;
}[] = [
  {
    id: 1,
    text: "header.home",
    link: "/",
    super: true,
  },
  {
    id: 2,
    text: "header.service-placement",
    link: "/service-placement",
    super: true,
  },
  {
    id: 3,
    text: "header.jobs-in-germany",
    link: "/jobs-in-germany",
    super: true,
  },

  {
    id: 4,
    text: "header.download",
    link: "#download-app",
    super: true,
  },
];
