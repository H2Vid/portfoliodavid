"use client"
import React from "react"
import { TextGenerateEffect } from "../ui/text-generate-effect"

const AboutMe = () => {
  const word = `Hi, I'm a Web Developer with experience in building web applications using a variety of technologies. I am skilled in HTML, CSS, JavaScript, ReactJs, NextJs, and backend development with Laravel, PHP, and CodeIgniter 3. I also have
        experience working with MySQL, Firebase, and building RESTful APIs. For design, I use Bootstrap, TailwindCSS, and Material UI, along with design tools like Figma and Adobe XD. I'm familiar with Git/GitHub for version control and
        often use Vercel for deployment. For CMS solutions, I also work with WordPress Elementor `
  return (
    <>
      <h1 className="text-[24px] md:text-[42px] lg:text-[60px] font-bold">Introduction</h1>
      <TextGenerateEffect words={word} />
    </>
  )
}

export default AboutMe
