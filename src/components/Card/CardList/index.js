"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CardList({ data, isLast, newLimit }) {
  const cardRef = useRef();
  const router = useRouter();

  // infinity scroll
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <div
      className="flex bg-white flex-col items-start justify-start shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-5 rounded-3xl"
      ref={cardRef}
      onClick={() => router.push("/list/detail")}
    >
      <p className="text-[#8D7777]">#1</p>
      <div className="w-full relative pt-[100%]">
        <Image
          src="/assets/example.svg"
          alt="profile"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <p className="text-main font-bold text-xl text-center w-full">Squirtle</p>
      <div className="flex flex-row justify-center w-full mt-2">
        <div className="basis-1/5 bg-[#2BC3FF] text-white p-2 font-semibold rounded">
          Water
        </div>
      </div>
    </div>
  );
}
