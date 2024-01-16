"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import Textfield from "@/components/Input/Textfield";
import AuthServices from "@/services/AuthServices";

export default function Register() {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.password_confirmation) {
      try {
        await AuthServices.register(data);
        router.push("/login");
      } catch (error) {
        alert(error?.response?.data?.message || error?.message);
      }
    } else {
      alert("Password tidak sesuai");
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
        <p className="text-main font-bold text-2xl">Daftar</p>
        <p className="text-[#8D7777] mt-5 mb-3">Nama</p>
        <Textfield
          placeholder="Masukkan Nama"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <p className="text-[#8D7777] mt-5 mb-3">Email</p>
        <Textfield
          placeholder="Masukkan Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <p className="text-[#8D7777] mt-3 mb-3">Password</p>
        <Textfield
          placeholder="Masukkan Password"
          type={isShowPassword ? "text" : "password"}
          name="password"
          value={data.password}
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
        <p className="text-[#8D7777] mt-3 mb-3">Konfirmasi Password</p>
        <Textfield
          placeholder="Masukkan Konfirmasi Password"
          type={isShowPassword ? "text" : "password"}
          name="password_confirmation"
          value={data.password_confirmation}
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
        <div className="flex flex-row items-center justify-start">
          <input type="checkbox" value="" id="checkboxDefault" />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            for="checkboxDefault"
          >
            <p className="text-black text-sm ">
              Dengan ini saya menyetujui semua{" "}
              <a className="text-main font-bold cursor-pointer" href="/login">
                Syarat & Ketentuan{" "}
              </a>
              yang berlaku
            </p>
          </label>
        </div>
        <button
          className="bg-main w-full text-white font-bold py-2 px-4 rounded-lg mt-5"
          type="submit"
        >
          Daftar
        </button>
      </form>
      <p className="text-black text-sm mt-20">
        Sudah punya akun?{" "}
        <a className="text-main font-bold cursor-pointer" href="/login">
          Masuk
        </a>
      </p>
    </div>
  );
}
