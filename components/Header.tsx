'use client'

import React from "react";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Header() {

    const sections = ["Home", "About Me", "Career", "Projects", "Contact"];

    return <div className=" w-full h-16 bg-gray-100 justify-center flex items-center px-8 dark:bg-gray-800 ">

        {/* avatar for logo */}
        <div className="flex-shrink-0">
            <Avatar className="rounded-full h-8 w-8 flex items-center justify-center bg-black text-white"> KF</Avatar>
        </div>

        {/* buttons for sections */}
        <div className="flex flex-1 justify-end items-center space-x-6 pr-16">
            {sections.map((section: string, i: number) => (
                <Button size="lg" variant={"ghost"} key={i} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                    {section}</Button>
            ))}
        </div>

        {/* toggle for dark mode */}
        <div className="flex-shrink-0">
            <Switch />
        </div>

    </div>
}