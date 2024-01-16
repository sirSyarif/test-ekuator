"use client";
import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import { Icon } from "@iconify/react";
const Form = dynamic(() => import("@/components/Form"), {
  ssr: false,
});

export default function Create() {
  const router = useRouter();

  return (
    <>
      <Navbar
        leftComponent={
          <div
            className="flex cursor-pointer items-center justify-start text-lg"
            onClick={() => router.back()}
          >
            <Icon
              icon="material-symbols-light:chevron-left"
              width={40}
              height={40}
              color="white"
            />
            <p className="text-white">Tambah Baru</p>
          </div>
        }
      />
      {/* main content */}
      <div className="max-w-7xl m-auto p-5">
        <Form />
      </div>
    </>
  );
}
