type NavbarTypes = {
  title: string;
  link: string;
};

export const navLinks: NavbarTypes[] = [
  { title: "products", link: "/products" },
  { title: "support", link: "/support" },
  { title: "solution", link: "/solution" },
  { title: "developers", link: "/developers" },
  { title: "partners", link: "/partners" },
  { title: "foundry", link: "/foundry" },
];

interface Slide {
  imageUrl: string;
  text: string;
  subText: string;
}

export const slides: Slide[] = [
  {
    imageUrl: "/images/5.jpg",
    text: "Welcome to the Future with AI",
    subText:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi facere iusto sequi minima atque dolorem enim officiis",
  },
  {
    imageUrl: "/images/2.jpg",
    text: "Welcome to the Future with AI",
    subText:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi facere iusto sequi minima atque dolorem enim officiis",
  },
  {
    imageUrl: "/images/4.jpg",
    text: "Welcome to the Future with AI",
    subText:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi facere iusto sequi minima atque dolorem enim officiis",
  },
];

interface Features {
  icon: string;
  text: string;
  url?: string;
}

export const FeaturesData: Features[] = [
  {
    icon: "ri:tools-fill",
    text: "Developer Tools",
    url: "/",
  },
  {
    icon: "proicons:open-source",
    text: "Open Source",
    url: "/",
  },
  {
    icon: "streamline:ai-gaming-spark",
    text: "Gaming",
    url: "/",
  },
  {
    icon: "solar:cloud-broken",
    text: "Cloud",
    url: "/",
  },
  {
    icon: "hugeicons:ai-brain-04",
    text: "AI PC",
    url: "/",
  },
  {
    icon: "carbon:edge-node-alt",
    text: "Edge",
    url: "/",
  },
  {
    icon: "basil:processor-outline",
    text: "HPC",
    url: "/",
  },
  {
    icon: "material-symbols-light:explore-outline",
    text: "Explore All",
    url: "/",
  },
];

//footerLinks
export type LinkType = {
  label: string;
  path: string;
};

export const navigationLinks: LinkType[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const servicesLinks: LinkType[] = [
  { label: "Drone Mapping", path: "/drone-mapping" },
  { label: "Real Estate", path: "/real-estate" },
  { label: "Commercial", path: "/commercial" },
  { label: "Construction", path: "/construction" },
];

export const socialLinks = [
  { icon: "ic:outline-facebook", path: "#" },
  { icon: "lets-icons:insta", path: "#" },
  { icon: "mdi:linkedin", path: "#" },
  { icon: "line-md:youtube", path: "#" },
];
