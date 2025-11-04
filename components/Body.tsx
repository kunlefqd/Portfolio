'use client'
import { Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Body() {

    return(
        <section id="hero">

        /* gradient background! */
        <div className ="h-lvh p-18
        bg-linear-to-b from-blue-100 to-blue-500 dark:from-black dark:to-midnight">

            {/* greeting*/ }
            <div className=" text-white w-full mb-16">
            <p className ="text-5xl font-bold text-black dark:text-white flex justify-center mt-4 mb-8">I'm Kunle Fakuade.</p>
            <p className ="text-3xl font-bold text-black dark:text-white flex justify-center">Nice to meet you.</p>
            </div>

            {/* socials! */}
            {/* <div className="flex justify-center w-full gap-20">
                <div className="flex flex-row gap-4"><Mail className = "min-w-8 min-h-8 dark:text-white"/><p className="text-white text-xl">akfakuade99@gmail.com</p></div>
                <div className="flex flex-row gap-4"><Github className = "min-w-8 min-h-8 dark:text-white"/> <a target="_blank" href="https://github.com/kunlefqd"><p className="text-white text-xl">github.com/kunlefqd</p></a></div>
                <div className="flex flex-row gap-4"><Linkedin className = "min-w-8 min-h-8 dark:text-white"/><a target="_blank" href="https://www.linkedin.com/in/kunlefqd/"><p className="text-white text-xl">linkedin.com/in/kunlefqd</p></a></div>
            </div> */}

            {/* intro */}
            <div className="flex flex-col items-center gap-3.5 m-10 ">
                <p className="flex justify-center max-w-3xl text-white text-xl/8 text-center mb-4">I’m a software engineer specializing in front-end development, with real-world experience in web and mobile applications.</p>
                <p className="flex justify-center max-w-2xl text-white text-xl text-center mb-14">Feel free to take a look at my projects.</p>
                <Button className="bg-black text-white" size="lg" variant="outline" >View My Work</Button>
            </div>

            {/* scroll */}
            
            {/* everything else... */}

        </div>
                </section>

    )
}