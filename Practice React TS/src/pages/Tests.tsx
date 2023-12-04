import { NavLink, Outlet } from "react-router-dom";
function Tests() {
  const navLinks = [
    {
      name: "getByRole",
      url: "getByRole",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="dropdown flex flex-row items-center gap-3 bg-gray-500 p-2">
        <div tabIndex={0} role="button" className="yellow-btn btn btn-sm m-1">
          Check all Tests
        </div>
        <div>
          <p className="text-white">{`<-- Click here to check all testing projects`}</p>
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
