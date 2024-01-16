import React from "react";
import Image from "next/image";

export default function CardEvolution() {
  return (
    <div className="flex flex-row bg-[#FFF8F8] rounded-2xl p-5">
      <div className="basis-1/6">
        <div className="w-full relative pt-[100%]">
          <Image
            src="/assets/example.svg"
            alt="profile"
            fill
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="basis-5/6 flex flex-col justify-between">
        <div>
          <p className="text-[#8D7777]">#1</p>
          <p className="text-main font-semibold text-xl w-full">Squirtle</p>
        </div>
        <div className="flex flex-row justify-start w-full mt-2">
          <div className="basis-1/6 bg-[#2BC3FF] text-white p-2 font-semibold rounded text-center">
            Water
          </div>
        </div>
      </div>
    </div>
  );
}
