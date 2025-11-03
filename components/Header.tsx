'use client'

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SunMedium } from "lucide-react";
import { StringToBoolean } from "class-variance-authority/types";


export default function Header() {

    type Section = {
        name: string;
        href: string;
    };

    useEffect(() =>{
        /* if no theme is previously specified by user, grab device theme preferences, */
        const selectedTheme = localStorage.getItem("theme");
        if (!selectedTheme) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        /* and write to local storage. */
        document.documentElement.classList.remove("dark", "light");
        if (prefersDark === false)
        {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        }
        else {
        document.documentElement.classList.add(selectedTheme);
    }
}, []); 
    function updateTheme(){
        const selectedTheme = localStorage.getItem("theme");
        document.documentElement.classList.remove("dark", "light");
        if (selectedTheme === "dark")
        {
            // change to light mode
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
        else if (selectedTheme === "light")
        {
            // change to dark mode
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    const sections = [
        {name: "Home", href: "#hero"},
        {name: "About Me", href: "#about"},
        {name: "Career", href: "#career"},
        {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
    ];

    return <div className="fixed w-full h-16 bg-blue-200 justify-center flex items-center px-8 dark:bg-black rounded-lg ">

        {/* avatar for logo */}
        <div className="flex-shrink-0">
            <Avatar className="rounded-full h-8 w-8 flex items-center justify-center bg-black text-white">KF</Avatar>
        </div>

        {/* buttons for sections */}
        <div className="flex flex-1 justify-end items-center space-x-6 pr-16">
            {sections.map((section: Section, i: number ) => (
                <Button size="lg" variant={"ghost"} key={i} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                    {section.name}</Button>
            ))}
        </div>

        {/* toggle for dark mode */}
        <div className="flex-shrink-0">
            <Button size="lg" className="group" 
            onClick={() => updateTheme()}>

                <SunMedium className="min-w-7 min-h-7 group-hover:text-yellow-200 transition-colors" />
            </Button>
        </div>

    </div>
}