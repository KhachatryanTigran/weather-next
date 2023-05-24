"use client";
import { MdWallpaper } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Searchbar from "./navbar/Searchbar";
import TodayCard from "./TodayCard";
import Forecast from "./Forecast";
import fetchwWeather from "./helper/fetchwWeather";
import { ForecastType, LocationType } from "./types/types";
import Location from "./Location";
import { ImageData } from "./types/interface";
import getDynamicBgStyles from "./helper/getDynamicBgStyles";
import searchImages from "./helper/getImages";
import getRandomNumber from "./helper/getRandomNumber";
import Error from "next/error";

const Main = () => {
  const [forecast, setForecast] = useState<ForecastType>();
  const [cityPhotos, setCityPhotos] = useState<ImageData[]>([
    { urls: { full: "" }, alt_description: "" },
  ]);
  const [bgImage, setBgImage] = useState<ImageData>({
    urls: { full: "" },
    alt_description: "",
  });

  useEffect(() => {
    searchImages(`${forecast?.location?.name || "city"} `, 20).then((res) => {
      setCityPhotos(res);
      setBgImage(res[0]);
    });
  }, [forecast]);

  const onClick = async (city: string) => {
    try {
      fetchwWeather(city, "7").then((res) => {
        setForecast(res);
      });
    } catch (error) {
      console.log("fgjfjfgj");
    }
  };
  const location: LocationType = {
    currTemp: forecast?.current.temp_c || 0,
    time: forecast?.location.localtime || "time not found",
    city: forecast?.location.name || "city not found",
    country: forecast?.location.country || "country not found",
    region: forecast?.location.region || "region not found",
    is_day: forecast?.current.is_day || 0,
  };
  return (
    <div
      className="p-3 bg-cyan-500 bg-opacity-10"
      style={{
        ...getDynamicBgStyles(bgImage.urls.full, "1600"),
        objectFit: "contain",
      }}
    >
      <MdWallpaper
        onClick={() =>
          setBgImage(cityPhotos[getRandomNumber(cityPhotos.length)])
        }
        className="text-amber-500 hover:bg-cyan-700 hover:text-stone-50 cursor-pointer   sm:hidden w-8 h-8 rounded-md "
      ></MdWallpaper>
      <button
        className="    hidden sm:float-right sm:block text-zinc-50 bg-cyan-600 hover:bg-cyan-800 rounded-lg p-1.5  text-xs  sm:text-base "
        onClick={() =>
          setBgImage(cityPhotos[getRandomNumber(cityPhotos.length)])
        }
      >
        Change Cover
      </button>
      <div>
        <Searchbar onClick={onClick}>Search</Searchbar>
      </div>
      <div className="flex max-md:flex-col md:justify-around   p-5 sm:p-10">
        <Location location={location} /> <TodayCard forecast={forecast} />
      </div>
      <div>
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
};

export default Main;
