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
