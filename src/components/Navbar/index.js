import React from "react";

export default function Navbar({ leftComponent, rightComponent }) {
  return (
    <div className="flex items-center justify-between bg-main h-14 p-10">
      {leftComponent && leftComponent}
      {rightComponent && rightComponent}
    </div>
  );
}
