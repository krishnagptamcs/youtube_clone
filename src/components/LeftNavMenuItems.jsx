import React from "react";

const LeftNavMenuItems = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "text-white  cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-base mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItems;
