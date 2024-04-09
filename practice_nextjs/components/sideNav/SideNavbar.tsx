import React from "react";
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
const ProjectNavlinks = [
  {
    path: "/",
    name: "Home",
    isActive: "true",
  },
];

function SideNavbar() {
  return (
    <>
      <ScrollArea className="min-h-[90vh] w-[250px] hidden md:block rounded-md border p-4"></ScrollArea>
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
