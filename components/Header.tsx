'use client'

import React from "react";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Header() {

    const sections = ["Home", "About Me", "Career", "Projects", "Contact"];

    return <div className="w-full h-16 bg-gray-100 justify-center flex items-center px-8">
        <div className="flex-shrink-0">
            {/* avatar for logo */}
            <Avatar className="rounded-full h-8 w-8 flex items-center justify-center bg-black text-white"> KF</Avatar>
        </div>

        <div className="flex flex-1 justify-end items-center space-x-6 pr-16">
            {sections.map((section: string, i: number) => (
                <Button variant={"ghost"} key={i} className="hover:text-gray-600">
                    {section}</Button>
            ))}

        </div>

        <div className="flex-shrink-0">
            <Switch/>
        </div>

    </div>
}