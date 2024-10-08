import React, { useState } from "react";
import { accordionItems } from "./data/data";
import Wrapper from "./wrapper";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4" id="faq">
      <button
        className="flex items-center w-full py-2 md:px-4 text-left text-white bg-transparent transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium sm:text-[24px] text-xl">Q. {title}</span>
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 pr-8 py-2 text-[16px] text-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full bg-[#140D28] md:p-8 p-4">
      <Wrapper>
        <h1 className="text-4xl font-semibold text-white mb-8 text-center">
          FAQ'S:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Accordion;
