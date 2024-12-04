import ticketsio from "@/assets/ticketsio.png";
import educatorPortfolio from "@/assets/educator portfolio.png";
import spaceTourism from "@/assets/space-tourism.png";
import oadarmolaPortfolio from "@/assets/oadaramola-portfolio.png";
import tourismSite from "@/assets/tourism-site.png";
import sneakersEcommerce from "@/assets/sneakers-ecommerce.png";
import weatherApp from "@/assets/weather-app.png";

export const navLinks = [
  {
    icon: "fa-solid fa-house-signal",
    name: "HOME",
    route: {
      name: "home",
    },
  },
  {
    icon: "fa-regular fa-user",
    name: "ABOUT",
    route: {
      name: "about",
    },
  },
  {
    icon: "fa-solid fa-business-time",
    name: "PROJECTS",
    route: {
      name: "projects",
    },
  },
  {
    icon: "fa-regular fa-envelope",
    name: "CONTACT",
    route: {
      name: "contact",
    },
  },
];

export const aboutData = [
  {
    label: "Name",
    name: "Oluwatosin Abigail Daramola",
  },
  {
    label: "Phone",
    name: "(+234) 813 730 2432",
  },
  {
    label: "Experience",
    name: "2 + years",
  },
  {
    label: "Nationality",
    name: "Nigerian",
  },
  {
    label: "Email",
    name: "oluwatosindaramola07@gmail.com",
  },
  {
    label: "Freelance",
    name: "Available",
  },
];

export const projectData = [
  {
    id: 1,
    image: ticketsio,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Figma", "Vuejs", "TailwindCSS", "VueUse", "Vue-router"],
    links: {
      share: "https://ticketsio.com",
    },
  },
  {
    id: 2,
    image: educatorPortfolio,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Vuejs", "TailwindCSS"],
    links: {
      share: "lucid-english-ielts.vercel.app/",
      github: "https://github.com/Heph-zibah/educator-portfolio",
    },
  },
  {
    id: 3,
    image: oadarmolaPortfolio,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: [
      "Vuejs",
      "TailwindCSS",
      "VueUse",
      "Vue-router",
      "Vue Typewriter Effect",
      "Shadcn",
    ],
    links: {
      share: "https://oadaramola.vercel.app/",
      github: "https://github.com/Heph-zibah/portfolio",
    },
  },
  {
    id: 4,
    image: spaceTourism,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Vuejs", "TailwindCSS"],
    links: {
      share: "space-tourism-website-reactjs.vercel.app/",
      github: "https://github.com/Heph-zibah/space-tourism-website-reactjs",
    },
  },
  {
    id: 5,
    image: tourismSite,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Vuejs", "TailwindCSS"],
    links: {
      share: "https://tour-site-demo.vercel.app/",
      github: "https://github.com/Heph-zibah/tour-site",
    },
  },
  {
    id: 6,
    image: sneakersEcommerce,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Figma", "Vuejs", "TailwindCSS"],
    links: {
      share: "sneakers-ecommerce-product.vercel.app/",
      github: "https://github.com/Heph-zibah/sneakers-ecommerce-product",
    },
  },
  {
    id: 7,
    image: weatherApp,
    name: "Frontend Project",
    description:
      "The UI/UX team created the design of this website. I designed the website utilizing the mobile first strategy.",
    stacks: ["Figma", "Vuejs", "TailwindCSS"],
    links: {
      share: "weather-app-alpha-lilac.vercel.app/",
      github: "https://github.com/Heph-zibah/weather-app",
    },
  },
];

export const contactData = [
  {
    icon: "fa-solid fa-phone-volume",
    label: "Phone",
    value: "(+234) 813 730 2432",
  },
  {
    icon: "fa-regular fa-envelope",
    label: "Email",
    value: "oluwatosindaramola07@gmail.com",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Remote",
  },
];
