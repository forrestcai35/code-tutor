"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Banner from "@/components /Banner"
import Footer from "@/components /Footer"
const Hero = () => {
  return (
    <div className=" py-20 relative overflow-clip ">

      <div>
        <div className="">
          <h1 className="text-[#98B4CE]  text-8xl font-bold text-center not-selectable" draggable="false">
            Code Tutor
          </h1>
          <h1 className="text-orange-400 text-4xl font-bold text-center not-selectable " draggable="false">
            An interactive way to learn code
          </h1>
        </div>
      </div>
      <Banner />
    </div >

  )
}


export default Hero