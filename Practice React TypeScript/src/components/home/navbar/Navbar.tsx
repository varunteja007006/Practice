import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavigationMenu className="p-5 flex">
      {/* brand  */}
      <NavigationMenuList>
        <NavigationMenuItem className="text-2xl me-5">
          <NavLink to={"/"}>React 💙 </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="justify-center">
        <NavigationMenuItem>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              [isActive ? "active bg-red-500" : "bg-yellow-400"].join(" ")
            }
          >
            Home
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink
            to={"/aboutme"}
            className={"bg-yellow-400 px-3 py-2 text-black rounded-lg"}
          >
            About Me
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
