import { NavLink } from "react-router-dom";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Social",
      url: "/social-links",
    },
    {
      name: "Tests",
      url: "/tests",
    },
  ];

  const navlinksMenu = [
    {
      name: "Image Slider",
      url: "/image-slider",
    },
    {
      name: "Tabs",
      url: "/tabs",
    },
    {
      name: "MultiPage Form",
      url: "/multipageform",
    },
  ];

  return (
    <div className="navbar min-w-[400px] bg-base-100 dark:bg-gray-700  dark:text-white ">
      <div className="navbar-start">
        {/* small screen */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-gray-300 p-2 text-black shadow dark:bg-gray-300 dark:text-black">
            {navlinks.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink to={item.url}>{item.name}</NavLink>
                </li>
              );
            })}

            <li>
              <a>Projects</a>
              <ul className="p-2">
                {navlinksMenu.map((item) => {
                  return (
                    <li key={item.name}>
                      <NavLink to={item.url}>{item.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        {/* brand name */}
        <a className="btn btn-ghost text-2xl">React TS 💙</a>
      </div>
      {/* large screen nav bar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((item) => {
            return (
              <li className="me-2" key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "active"
                        : "bg-gray-300 text-black dark:bg-gray-300 dark:text-black"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Projects & theme buttons */}
      <div className="navbar-end">
        <div className="dropdown hidden lg:block">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-blue-100 hover:bg-blue-200 dark:bg-gray-300 dark:hover:bg-gray-400"
          >
            Explore Projects
          </div>
          <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-blue-100 p-2 shadow dark:bg-gray-300">
            {navlinksMenu.map((item) => {
              return (
                <li
                  key={item.name}
                  className="rounded-lg text-black dark:hover:bg-gray-400"
                >
                  <NavLink to={item.url}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn">Theme</a>
      </div>
    </div>
  );
}

export default Navbar;
