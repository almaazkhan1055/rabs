import React from "react";
import { navigationData } from "./data/data";
import Wrapper from "./wrapper";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001772] text-white py-10">
      <Wrapper>
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 ">Services</h2>
              <div className="h-[1px] footerbbtm mb-4"></div>
              <ul className="text-sm">
                {navigationData.services.map((service, index) => (
                  <li key={index} className="mb-2">
                    <a href={service.href} className="hover:underline">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Office Address</h2>
              <div className="h-[1px] footerbbtm mb-4"></div>
              <ul className="text-sm">
                {navigationData.officeAddress.map((item, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="mr-2">{item.name[0]}</span>
                    <a href={item.href} className="hover:underline">
                      {item.name[1]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Newsletter</h2>
              <div className="h-[1px] footerbbtm mb-4"></div>
              <form className="mb-4">
                <input
                  type="email"
                  placeholder={navigationData.newsletter.placeholder}
                  className="w-full p-2 mb-2 bg-transparent"
                />
                <div className="h-[1px] footerbbtm mb-4"></div>

                <div className="flex items-center mb-2">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms">
                    {navigationData.newsletter.termsText}
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#001772] text-white border border-white px-4 py-1"
                >
                  {navigationData.newsletter.buttonText}
                </button>
              </form>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center text-sm">
            <p>{navigationData.copyright}</p>
            <div className="mt-4 md:mt-0">
              {navigationData.legal.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="mr-4 hover:underline"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
