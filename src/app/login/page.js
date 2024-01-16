"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import Textfield from "@/components/Input/Textfield";
import AuthServices from "@/services/AuthServices";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState({ email: "", password: "" });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthServices.login(login);
      localStorage.setItem("user-pokemon", JSON.stringify(res?.data?.data));
      router.push("/list");
    } catch (error) {
      alert(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <Image src="/assets/brand.svg" width={270} height={100} />
      <form
        className="block w-full rounded-2xl text-left shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] max-w-xl p-10 mt-14 bg-white"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <p className="text-main font-bold text-2xl">Masuk</p>
        <p className="text-[#8D7777] mt-5 mb-3">Email</p>
        <Textfield
          placeholder="Masukkan Email"
          name="email"
          value={login.email}
          onChange={handleChange}
          required
        />
        <p className="text-[#8D7777] mt-3 mb-3">Password</p>
        <Textfield
          placeholder="Masukkan Password"
          type={isShowPassword ? "text" : "password"}
          name="password"
          value={login.password}
          onChange={handleChange}
          required
          endIcon={
            <Icon
              icon={isShowPassword ? "ri:eye-off-fill" : "ri:eye-line"}
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="cursor-pointer"
              width={20}
              height={20}
              color="#E51C23"
            />
          }
        />
        <p className="text-main font-bold text-md float-right cursor-pointer mt-5">
          Lupa Password?
        </p>
        <button
          className="bg-main w-full text-white font-bold py-2 px-4 rounded-lg mt-5"
          type="submit"
        >
          Masuk
        </button>
      </form>
      <p className="text-black text-sm mt-20">
        Belum punya akun?{" "}
        <a className="text-main font-bold cursor-pointer" href="/register">
          Daftar Sekarang
        </a>
      </p>
    </div>
  );
}
