import React from "react";

export default function Textfield({
  value,
  onChange,
  type = "text",
  placeholder,
  endIcon,
  name,
  required = false,
}) {
  return (
    <div className="relative flex w-full flex-wrap items-stretch ">
      <input
        className="bg-[#FFF8F8] appearance-none rounded w-full py-2 px-4 text-[#BCA8A8] leading-tight focus:outline-none h-10 placeholder-[#BCA8A8]"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {endIcon && (
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          {endIcon}
        </span>
      )}
    </div>
  );
}
