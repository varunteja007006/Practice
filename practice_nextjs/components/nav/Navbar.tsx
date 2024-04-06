"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navlinks } from "./navlink";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center md:justify-between w-full p-2">
        <h1 className="hidden text-xl text-white  md:block px-2">{`<Developer />`}</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[200px]">
                <FiMenu className="me-2" /> Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] flex flex-col items-center justify-center p-2 text-sm gap-2">
                  {navlinks.map((item, index) => {
                    return (
                      <li key={index + 1}>
                        <Link
                          href={item.path}
                          className="border-b-2 border-gray-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center p-2 text-xl text-white md:hidden w-full">
        <h1>{`<Developer />`}</h1>
      </div>
    </>
  );
}

export default Navbar;
