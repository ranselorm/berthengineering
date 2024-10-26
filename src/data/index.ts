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

// Data type for the testimonials
export interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Julie Sarve",
    role: "Freelancer Designer",
    image: "/images/5.jpg",
    rating: 5,
    feedback:
      "I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.",
  },
  {
    name: "Tanny Walkar",
    role: "Software Developer",
    image: "/path-to-image/tanny.png",
    rating: 4,
    feedback:
      "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
  },
  {
    name: "Maddy Brown",
    role: "Online Entrepreneur",
    image: "/path-to-image/maddy.png",
    rating: 3,
    feedback:
      "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
  },
];
