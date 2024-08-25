import React from "react";
import { IoIosStar } from "react-icons/io";

const Star = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar className="text-gray-600" />
    </div>
  );
};

export default Star;
