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
function Navbar() {
  return (
    <div className="w-full flex items-center p-2 justify-center">
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[200px]">
              <FiMenu className="me-2" /> Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[200px] flex flex-col items-center justify-center p-2 text-sm gap-2">
                <li className="border-t-0 border-y-2">Home</li>
                <li className="">Contact</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
