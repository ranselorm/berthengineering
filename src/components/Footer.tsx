// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { navigationLinks, servicesLinks, socialLinks } from "../data/";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 bg-secondary text-white font-primary">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
        {/* Brand Section */}
        <div>
          <div className="w-40 cursor pointer">
            <img
              src="/icons/mix.png"
              alt=""
              className="w-full h-full object-contain mr-32"
            />
          </div>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptatibus hic neque iste, deleniti eos inventore adipisci
            provident, velit in id ratione consequuntur minima ut saepe officia
            deserunt aut nam!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe newsletter</h3>
          <p className="text-gray-400 text-sm">
            Subscribe our newsletter to get updates about our services and
            offers.
          </p>
          <form className="mt-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md"
              >
                →
              </button>
            </div>
          </form>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.path}
                href={social.path}
                className="text-white hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={social.icon} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        Copyright ©2024 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
