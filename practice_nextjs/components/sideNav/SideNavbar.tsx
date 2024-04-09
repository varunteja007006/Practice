"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuUnfoldLine } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const REACT_HEADER = "React Stuff";
const PROJECT_HEADER = "Projects";
const PROBLEMS_HEADER = "Problems";
const REACT_PATH = "/react";
const PROJECT_PATH = "/react/projects";
const PROBLEMS_PATH = "/react/problems";

const ProjectNavlinks = [
  {
    path: "/react/projects/tabs",
    name: "Tabs",
    isActive: true,
  },
  {
    path: "/react/projects/multi-page-form",
    name: "Multi-Page-Form",
    isActive: true,
  },
  {
    path: "/react/projects/materialUI",
    name: "Material UI",
    isActive: true,
  },
  {
    path: "/react/projects/image-slider",
    name: "Image Slider",
    isActive: true,
  },
  {
    path: "/react/projects/form-builder",
    name: "Form Builder",
    isActive: true,
  },
  {
    path: "/react/projects/zod-reacthookform",
    name: "Zod + React Hook Form",
    isActive: true,
  },
];

const ReactNavLinks = [
  {
    path: "/react/projects",
    name: "Projects",
    isActive: true,
  },
  {
    path: "/react/problems",
    name: "Problems",
    isActive: true,
  },
];

const SideBarLinks = {
  [REACT_HEADER]: {
    isBackAllowed: false,
    backRoute: "/",
    path: REACT_PATH,
    header: REACT_HEADER,
  },
  [PROJECT_HEADER]: {
    isBackAllowed: true,
    backRoute: "/react",
    path: PROJECT_PATH,
    header: PROJECT_HEADER,
  },
  [PROBLEMS_HEADER]: {
    isBackAllowed: true,
    backRoute: "/react",
    path: PROBLEMS_PATH,
    header: PROBLEMS_HEADER,
  },
};
console.log("💣 ~ file: SideNavbar.tsx:89 ~ SideBarLinks:", SideBarLinks);

const CustomNavLink = ({ path, name }: { path: string; name: string }) => {
  return (
    <Link
      href={path}
      className=" rounded-none w-full border-2 hover:bg-gray-300 hover:text-black hover:border-2 hover:border-black"
    >
      <NavigationMenuItem className="px-2 py-1">{name}</NavigationMenuItem>
    </Link>
  );
};

function SideNavbar() {
  const currentPath = usePathname();

  let isBackAllowed = false;
  let backRoute = "/";
  let header = "";

  if (currentPath === "/react") {
    header = REACT_HEADER;
    isBackAllowed = SideBarLinks[REACT_HEADER].isBackAllowed;
    backRoute = SideBarLinks[REACT_HEADER].backRoute;
  } else if (currentPath.includes("/react/projects")) {
    header = PROJECT_HEADER;
    isBackAllowed = SideBarLinks[PROJECT_HEADER].isBackAllowed;
    backRoute = SideBarLinks[PROJECT_HEADER].backRoute;
  } else if (currentPath.includes("/react/problems")) {
    header = PROBLEMS_HEADER;
    isBackAllowed = SideBarLinks[PROBLEMS_HEADER].isBackAllowed;
    backRoute = SideBarLinks[PROBLEMS_HEADER].backRoute;
  }

  return (
    <>
      <ScrollArea className="min-h-[90vh] w-[250px] hidden md:block rounded-md border p-1">
        <NavigationMenu className="w-full max-w-full block">
          <NavigationMenuList className="p-1 flex flex-col gap-2 w-full">
            <NavigationMenuItem className="px-2 py-1">
              <span className="flex flex-row gap-2 items-center justify-center">
                {isBackAllowed && (
                  <Link href={backRoute}>
                    <IoMdArrowRoundBack />
                  </Link>
                )}
                {header}
              </span>
            </NavigationMenuItem>
            {header === REACT_HEADER &&
              ReactNavLinks?.map((item, index) => {
                if (item.isActive) {
                  return <CustomNavLink key={index} {...item} />;
                }
              })}
            {header === PROJECT_HEADER &&
              ProjectNavlinks?.map((item, index) => {
                if (item.isActive) {
                  return <CustomNavLink key={index} {...item} />;
                }
              })}
          </NavigationMenuList>
        </NavigationMenu>
      </ScrollArea>
      <Sheet>
        <SheetTrigger className="block text-xs md:hidden border-[1px] border-violet-800 hover:border-2 rounded w-fit p-2">
          <span className="flex flex-row gap-2 items-center justify-center">
            <RiMenuUnfoldLine />
            PROJECTS
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="mt-4">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SideNavbar;
