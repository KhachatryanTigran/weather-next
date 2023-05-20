import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import {
  WiDaySunny,
  WiRaindrop,
  WiNightRainMix,
  WiStrongWind,
  WiHumidity,
  WiThermometer,
} from "react-icons/wi";

import getDynamicBgStyles from "./helper/getDynamicBgStyles";
import { BgStyle, ImageData } from "./types/interface";
import { CurrentDay, ForecastType } from "./types/types";

interface CardProps {
  image?: ImageData;
  condition?: string;
  temperature?: number;
  pressure?: number;
  humidity?: number;
  wind?: number;
  precipitation?: number;
  icon?: String;
}

type Weather = {
  name: String;
  unit?: String;
  impUnit?: String;
  icon?: IconType;
};
const Card: React.FC<CardProps> = ({
  image,
  condition,
  temperature,
  pressure,
  humidity,
  precipitation,
  wind,
  icon,
}) => {
  const weather = [
    {
      name: "Condition",
      unit: condition || "",
    },
    {
      name: "Temperature",
      unit: `${temperature || 0} °C`,
      impUnit: "°F",
      icon: WiThermometer,
    },
    {
      name: "Pressure",
      unit: `${pressure || 1013.2} millibars`,
      impUnit: "Inches of Mercury",
      icon: WiRaindrop,
    },
    {
      name: "Humidity",
      unit: `${humidity || 0} %`,
      icon: WiHumidity,
    },
    {
      name: "Wind",
      unit: `${wind || 0} km/h `,
      impUnit: "mph",
      icon: WiStrongWind,
    },
    {
      name: "Precipitation",
      unit: `${precipitation || 0} mm `,
      impUnit: "in",
      icon: WiNightRainMix,
    },
  ];

  return (
    <div
      className={` flex  w-full h-full   p-1 lg:p-10 md:p-6 sm:p-3 rounded-lg  
    dark:bg-slate-600 dark:text-slate-50 text-stone-50 `}
      style={{
        ...(image && getDynamicBgStyles(image?.urls.full, "500")),
        objectFit: "contain",
      }}
    >
      {<WiDaySunny className=" text-yellow-200 w-40 h-40" />}

      <div>
        {weather.map((elem: Weather, i) => {
          return (
            <div key={i} className=" gap-2 flex ">
              {elem.icon ? (
                <elem.icon className="text-blue-300 w-8 h-8"></elem.icon>
              ) : icon ? (
                <img src={icon.toString()} width={32} height={32} alt=""></img>
              ) : null}
              <h3>{elem.name}</h3> <h3>{elem.unit}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
