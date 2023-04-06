import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-yellow-500 ">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 mb-0 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-yellow-500
        duration-300 "
        >
          <icon.name/>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;