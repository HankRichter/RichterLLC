import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <h1 className="text-2xl font-bold p-4">Richter LLC</h1>
      <ul className="flex justify-end p-4">
        <li className="mr-4">
          <a
            href="tel:9894137843"
            className="text-blue-300 hover:text-blue-500"
          >
            989-413-7843
          </a>
        </li>
        <li>
          <a
            href="mailto:hankricter97@gmail.com"
            className="text-blue-300 hover:text-blue-500"
          >
            hankrichter97@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
