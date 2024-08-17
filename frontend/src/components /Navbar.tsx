"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0, transition: {
        stiffness: 20,
        damping: 20
      }
    },
    closed: {
      x: '-100%', transition: {
        stiffness: 20,
        damping: 20
      }
    }
  }

  return (
    <div className="text-white/70 pt-6">
      <div className="hidden md:flex items-center justify-center px-4 py-2 max-w-full">
        <ul className="flex flex-row p-4 space-x-8">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="pb-1.5 cursor-pointer transition-all hover:font-bold non-selectable" draggable="false">
              <Link href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 rounded text-white/70 pd-2 z-50 non-selectable" draggable="false">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>


      <motion.div
        initial={false}
        animate={nav ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full z-40 bg-black/90 not-selectable" draggable='false'>
        <ul className="test-4xl my-24 text-center space-y-8" draggable='false'>
          {NAV_LINKS.map((link, index) =>
          (<li key={index}>
            <Link href={link.path} onClick={closeNav} className="pb-1.5 cursor-pointer transition-all hover:font-bold">
              {link.title}
            </Link>
          </li>

          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
