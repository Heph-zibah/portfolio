import ticketsio from "@/assets/ticketsio.png";
import educatorPortfolio from "@/assets/educator portfolio.png";
import spaceTourism from "@/assets/space-tourism.png";
import oadarmolaPortfolio from "@/assets/oadaramola-portfolio.png";
import sneakersEcommerce from "@/assets/sneakers-ecommerce.png";
import html from "@/assets/HTML.png";
import css from "@/assets/CSS.png";
import Javascript from "@/assets/Javascript.png";
import Tailwind from "@/assets/Tailwind.png";
import Vue from "@/assets/Vue.png";

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

export const experienceData = [
  {
    id: 1,
    name: "Frontend developer (Remote)",
    company: "Ticketsio, Dublin.",
    year: "April 2023 - April 2025",
  },
  {
    id: 2,
    name: "Frontend developer (Remote)",
    company: "Jasot Academy, Nigeria.",
    year: "March 2022 - March 2023",
  },
];

export const skillsImages = [
  {
    id: 1,
    image: html,
  },
  {
    id: 2,
    image: css,
  },
  {
    id: 3,
    image: Javascript,
  },
  {
    id: 4,
    image: Tailwind,
  },
  {
    id: 5,
    image: Vue,
  },
];

export const educationData = [
  {
    id: 1,
    name: "Frontend Engineering (Ongoing)",
    school: "ALTSCHOOL",
    year: "November 2024 – Present",
    description:
      "I am currently enrolled in ALTSchool’s Frontend Engineering program, where I am expanding my expertise in modern web development, coding best practices, and problem-solving techniques.",
  },
  {
    id: 2,
    name: "ALX AiCE",
    school: "ALX AFRICA",
    year: "July 2024 - August 2024",
    description:
      "Completed the AI Career Essentials program, gaining foundational knowledge in AI and its applications in various industries.",
  },
  {
    id: 3,
    name: "Bachelor of Education in Education and Language Arts",
    school: "Obafemi Awolowo University, Ile-Ife",
    year: "May 2017 - August 2022",
    description:
      "Graduated with a First Class, where I developed strong analytical, communication, and problem-solving skills that support my work in web development and technology.",
  },
];

export const projectData = [
  {
    id: 1,
    image: ticketsio,
    name: "Ticketsio Event Creation App",
    description:
      "This website was designed as part of a collaborative effort with the UI/UX team, who provided the initial design. I implemented the design using a mobile-first strategy, ensuring a responsive and user-friendly experience across devices. The development process focused on clean and maintainable code to bring the team's vision to life.",
    stacks: ["Figma", "Vuejs", "TailwindCSS", "Pinia"],
    links: {
      share: "https://ticketsio.com",
    },
  },
  {
    id: 2,
    image: educatorPortfolio,
    name: "Academic Portfolio",
    description:
      "This is a portfolio designed for an educator, showcasing their professional achievements, teaching philosophy, and educational projects. The design emphasizes clarity and organization, providing a user-friendly experience to highlight their skills and contributions to the field of education. The portfolio is fully responsive and tailored to effectively present their expertise to diverse audiences.",
    stacks: ["Vuejs", "TailwindCSS"],
    links: {
      share: "lucid-english-ielts.vercel.app/",
      github: "https://github.com/Heph-zibah/educator-portfolio",
    },
  },
  {
    id: 3,
    image: oadarmolaPortfolio,
    name: "The Developer’s Canvas",
    description:
      "This is my personal portfolio, designed to showcase my skills, projects, and professional achievements as a frontend developer. It reflects my expertise in creating responsive and visually appealing web applications, highlighting my journey, work, and the value I bring to every project. Built with clean and efficient code, the portfolio serves as a dynamic representation of my passion for web development.",
    stacks: ["Vuejs", "TailwindCSS", "Shadcn"],
    links: {
      share: "https://oadaramola.vercel.app/",
      github: "https://github.com/Heph-zibah/portfolio",
    },
  },
  {
    id: 4,
    image: spaceTourism,
    name: "Space Odyssey Tours",
    description:
      "This project, titled Space Odyssey Tours, is a space tourism website designed to inspire and engage future explorers of the cosmos. Created as part of a Frontend Mentor challenge, I transformed the provided design into a fully functional, responsive website. The development process prioritized clean, pixel-perfect code to ensure a seamless user experience across all devices.",
    stacks: ["Vuejs", "TailwindCSS"],
    links: {
      share: "space-tourism-website-reactjs.vercel.app/",
      github: "https://github.com/Heph-zibah/space-tourism-website-reactjs",
    },
  },
  {
    id: 5,
    image: sneakersEcommerce,
    name: "StrideMart",
    description:
      "This project, StrideMart, is a sleek and modern e-commerce website focused on showcasing and selling sneakers. The design was provided by the UI/UX team, and I brought it to life using a mobile-first strategy to ensure a responsive, intuitive, and user-friendly shopping experience. The development process emphasized clean, maintainable code to create a seamless and engaging platform for sneaker enthusiasts.",
    stacks: ["Figma", "Vuejs", "TailwindCSS"],
    links: {
      share: "sneakers-ecommerce-product.vercel.app/",
      github: "https://sneakers-ecommerce-product.vercel.app/",
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
