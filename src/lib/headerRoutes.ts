import { HeaderRoutes } from "@/components/Header";

export const routes : HeaderRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
] as const;



