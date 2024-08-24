import React from "react";
import "./index.css";
import { navData } from "./data/data";

const Nav = () => {
  const { logo, navigationList, contact } = navData[0];

  return (
    <div className="bg-white shadow-md px-6 py-2 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <nav>
          <ul className="flex space-x-4">
            {navigationList.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-black font-semibold hover:text-gray-900"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-2">
          <div className="bg-blue-500 rounded-full object-contain p-1">
            <img
              src="https://rabsnetsolutions.com/experience-center/assets/img/RABS_Landing_Page/phone.png"
              alt="Phone"
              className="img-size animate-pulse-custom"
            />
          </div>
          <div className="text-black font-bold">Lets Talk: {contact}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
