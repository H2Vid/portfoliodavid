"use client"
import React from "react"
import Marquee from "react-fast-marquee"
import * as Io5 from "react-icons/io5"
import * as Si from "react-icons/si"
import * as Fa from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"

const SkillAndTools = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center w-[100%] mb-10 mt-20 lg:pt-16 items-center">Skills & Tools</h1>
      <Marquee autoFill pauseOnClick speed={30}>
        <div align="left" className="flex space-x-6">
          <Io5.IoLogoHtml5 className="text-orange-500 ml-7" size={35} />
          <Io5.IoLogoGithub className="text-white bg-black rounded-full" size={35} />
          <Si.SiCss3 size={35} className="text-blue-600" />
          <Si.SiJavascript className="text-yellow-300 bg-black" size={35} />
          <Io5.IoLogoVercel size={35} />
          <Si.SiTailwindcss className="text-blue-400" size={35} />
          <Fa.FaReact className="text-blue-500" size={35} />
          <Fa.FaNodeJs size={35} className="bg-green-600 text-white" />
          <TbBrandNextjs className="bg-black text-white" size={35} />
        </div>
      </Marquee>
      <Marquee autoFill pauseOnClick direction="rigth" className="mt-5">
        <div align="left" className="flex gap-x-6">
          <Fa.FaDribbble className="text-pink-500 ml-7" size={35} />
          <Fa.FaBootstrap className="text-purple-700 ml-7" size={35} />
          <Si.SiAdobexd className="text-pink-900" size={30} />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.9em" viewBox="0 0 256 384">
              <path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" />
              <path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" />
              <path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" />
              <path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" />
              <path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.9em" height="2.9em" viewBox="0 0 256 256">
              <g fill="none">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path fill="#2489ca" d="M33.716 100.208s-4.735-3.413.947-7.97l13.236-11.836s3.788-3.985 7.792-.513l122.149 92.479v44.346s-.059 6.964-8.996 6.194z" />
                <path fill="#1070b3" d="m65.2 128.792l-31.484 28.623s-3.236 2.407 0 6.708l14.617 13.295s3.472 3.729 8.601-.513l33.378-25.309z" />
                <path fill="#0877b9" d="m120.474 129.029l57.741-44.09l-.375-44.109s-2.466-9.627-10.692-4.616l-76.836 69.931z" />
                <path
                  fill="#3c99d4"
                  d="M168.844 222.968c3.354 3.432 7.418 2.308 7.418 2.308l44.997-22.173c5.76-3.926 4.951-8.798 4.951-8.798V61.898c0-5.82-5.958-7.831-5.958-7.831l-38.999-18.8c-8.522-5.267-14.105.947-14.105.947s7.18-5.168 10.692 4.616v175.075a7.974 7.974 0 0 1-.769 3.453c-1.026 2.071-3.255 4.004-8.601 3.195z"
                />
              </g>
            </svg>
          </span>
        </div>
      </Marquee>
    </>
  )
}

export default SkillAndTools
