import React, { useState } from "react";
import Link from "../LInk/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <span>
          {open === true ? 
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          : 
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          }
        </span>
      </div>

      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
