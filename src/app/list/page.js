"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import CardList from "@/components/Card/CardList";
import PokemonServices from "@/services/PokemonServices";

export default function List() {
  const router = useRouter();
  const [limit, setLimit] = useState(10);

  const { data } = useQuery(["main-account-all"], () =>
    PokemonServices.getPokemon({
      page: 1,
      limit: limit,
    })
  );
  const dataPokemon = data?.data;

  const handleLogout = () => {
    localStorage.removeItem("user-pokemon");
    router.push("/login");
  };
  return (
    <div>
      <Navbar
        leftComponent={
          <Image src="/assets/brand.svg" width={130} height={30} />
        }
        rightComponent={
          <div className="flex items-end justify-end pr-1 md:pr-10 gap-5">
            <Icon
              icon="healthicons:ui-user-profile"
              width={30}
              height={30}
              color="#FFFFFF"
            />
            <Icon
              icon="material-symbols:logout"
              width={30}
              height={30}
              color="#FFFFFF"
              className="cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        }
      />
      {/* main content */}
      <div className="max-w-7xl m-auto p-5">
        <button
          className="bg-main text-white py-2 px-4 rounded-lg mt-5"
          type="submit"
        >
          Tambah Pokemon Baru
        </button>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 items-center mt-10 gap-10">
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} />
          <CardList newLimit={() => setLimit(limit + 10)} isLast />
        </div>
      </div>
    </div>
  );
}
