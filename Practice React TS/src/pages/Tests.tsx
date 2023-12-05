import { NavLink, Outlet } from "react-router-dom";
function Tests() {
  const navLinks = [
    {
      name: "getByRole",
      url: "getByRole",
    },
    {
      name: "Accordian",
      url: "accordian",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="dropdown dropdown-bottom bg-gray-600 p-2 pb-0">
        <div tabIndex={0} role="button" className="btn btn-sm m-1">
          Check all Tests
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          {navLinks.map((item) => {
            return (
              <li>
                <NavLink to={`/tests/${item.url}`}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Tests;
