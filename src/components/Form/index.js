"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactTags } from "react-tag-autocomplete";

import Textfield from "../Input/Textfield";
import PokemonServices from "@/services/PokemonServices";
import { debounce } from "@/utils/helper";
import CardEvolution from "../Card/CardEvolution";

export default function Form() {
  const pathname = usePathname();
  const isDetail = pathname.includes("detail");

  const [isBusy, setIsBusy] = useState(false);
  const [data, setData] = useState({
    name: "",
    types: [],
    classification: "",
    resistances: [],
    evolutions: [],
    image: null,
  });
  const [listType, setListType] = useState([]);
  const [listClass, setListClass] = useState([]);

  const onAdd = useCallback(
    (newTag, names) => {
      setData({ ...data, [names]: newTag });
    },
    [data]
  );

  const onDelete = useCallback(
    (tagIndex, names) => {
      setData({
        ...data,
        [names]: data[names].filter((_, i) => i !== tagIndex),
      });
    },
    [data]
  );

  // debounce funstion on search type and class
  const onInputType = useCallback(
    debounce(async (value) => {
      if (isBusy) return;

      setIsBusy(true);

      try {
        const suggestions = await PokemonServices.getPokemonType({
          page: 1,
          limit: 10,
          keyword: value,
        });
        const data = suggestions?.data?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        setListType(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsBusy(false);
      }
    }),
    [isBusy]
  );

  const onInputClass = useCallback(
    debounce(async (value) => {
      if (isBusy) return;

      setIsBusy(true);

      try {
        const suggestions = await PokemonServices.getPokemonClass({
          page: 1,
          limit: 10,
          keyword: value,
        });
        const data = suggestions?.data?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        setListClass(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsBusy(false);
      }
    }),
    [isBusy]
  );

  return (
    <div className="flex flex-row">
      <div className="basis-1/3 flex flex-col items-center justify-center">
        <Image
          src={isDetail ? "/assets/example.svg" : "/assets/skeleton.svg"}
          width={270}
          height={100}
        />
        <p className="text-main font-bold text-xl text-center w-full">
          Tambah Baru
        </p>
      </div>

      <div className="basis-2/3">
        {/* Card Information */}
        <div className="flex flex-col bg-white items-stretch justify-start shadow-[0px_0px_7.378px_0px_rgba(0,0,0,0.25)] p-5 rounded-xl">
          <p className="text-main font-bold text-xl text-start w-full">
            Informasi Umum
          </p>
          <p className="text-[#8D7777] mt-3 mb-1 font-medium">Nomor</p>
          <p className="text-[#453E3E] font-bold"># 16</p>
          <p className="text-[#8D7777] mt-3 mb-1 font-medium">Nama</p>
          {isDetail ? (
            <p className="text-[#453E3E] font-bold">Squirtle</p>
          ) : (
            <Textfield />
          )}
          <p className="text-[#8D7777] mt-3 mb-1 font-medium">Types</p>
          {isDetail ? (
            <div className="flex flex-row justify-start w-full mt-2">
              <div className="basis-1/6 bg-[#2BC3FF] text-white p-2 font-semibold rounded text-center">
                Water
              </div>
            </div>
          ) : (
            <ReactTags
              labelText=""
              selected={data.types}
              onAdd={(newValue) => onAdd(newValue, "type")}
              onDelete={(newValue) => onDelete(newValue, "type")}
              suggestions={listType}
              noOptionsText="Not Found"
              onInput={onInputType}
            />
          )}
          <p className="text-[#8D7777] mt-3 mb-1 font-medium">Classification</p>
          {isDetail ? (
            <p className="text-[#453E3E] font-bold">Water Pokemon</p>
          ) : (
            <ReactTags
              labelText=""
              selected={data.types}
              onAdd={(newValue) => onAdd(newValue, "classification")}
              onDelete={(newValue) => onDelete(newValue, "type")}
              suggestions={listType}
              noOptionsText="Not Found"
              onInput={onInputType}
            />
          )}
          <p className="text-[#8D7777] mt-3 mb-1 font-medium">Resistant</p>
          {isDetail ? (
            <div className="flex flex-row justify-start w-full mt-2 gap-2">
              <div className="basis-1/6 bg-[#453E3E] text-white p-2 font-semibold rounded text-center">
                Fire
              </div>
              <div className="basis-1/6 bg-[#453E3E] text-white p-2 font-semibold rounded text-center">
                Earth
              </div>
              <div className="basis-1/6 bg-[#453E3E] text-white p-2 font-semibold rounded text-center">
                Electric
              </div>
            </div>
          ) : (
            <ReactTags
              labelText=""
              selected={data.types}
              onAdd={(newValue) => onAdd(newValue, "resistant")}
              onDelete={(newValue) => onDelete(newValue, "type")}
              suggestions={listType}
              noOptionsText="Not Found"
              onInput={onInputType}
            />
          )}
        </div>
        {/* Card Evolution */}
        <div className="flex flex-col bg-white items-stretch justify-start shadow-[0px_0px_7.378px_0px_rgba(0,0,0,0.25)] p-5 rounded-xl mt-5">
          <p className="text-main font-bold text-xl text-start w-full">
            Evolution
          </p>
          <CardEvolution />
        </div>
      </div>
    </div>
  );
}
