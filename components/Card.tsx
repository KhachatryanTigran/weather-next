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
  WiMoonWaningCrescent3,
} from "react-icons/wi";

import getDynamicBgStyles from "./helper/getDynamicBgStyles";
import { BgStyle, ImageData } from "./types/interface";
import { CurrentDay, ForecastType } from "./types/types";
import { getDay } from "./helper/getDays";

interface CardProps {
  image?: ImageData;
  condition?: string;
  temperature?: number;
  pressure?: number;
  humidity?: number;
  wind?: number;
  precipitation?: number;
  icon?: String;
  is_day?: number;
  day?: string;
}

type Weather = {
  name?: String;
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
  is_day,
  day,
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
      unit: `${pressure || 1013} millibars`,
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
      className={` flex  ${
        pressure ? "h-full min-w-full" : "h-full w-full lg:w-auto md:h-auto"
      }    p-1 lg:p-3 md:p-2   rounded-lg  
     text-stone-50 bg-stone-950  bg-opacity-30  `}
      style={{
        ...(image && getDynamicBgStyles(image?.urls.full, "500")),
        objectFit: "contain",
      }}
    >
      {is_day === 0 ? (
        <WiMoonWaningCrescent3 className="text-yellow-800  w-32 h-32" />
      ) : (
        <WiDaySunny className="text-yellow-200 w-40 h-40" />
      )}

      <div>
        {day && <h1 className="text-base sm:text-lg">{getDay(day)}</h1>}
        {weather.map((elem: Weather, i) => {
          if (elem.name === "Pressure" && !pressure) {
            return;
          }
          return (
            <div
              key={i}
              className=" gap-1 p-1 md:gap-1   flex text-xs sm:text-base"
            >
              {elem.icon ? (
                <elem.icon className="text-blue-300 w-8 h-8"></elem.icon>
              ) : icon ? (
                <img
                  src={icon.toString()}
                  width={32}
                  height={32}
                  alt="icon"
                ></img>
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
