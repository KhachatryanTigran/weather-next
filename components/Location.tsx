import React from "react";
import { LocationType } from "./types/types";
import { WiDaySunny, WiMoonWaningCrescent3 } from "react-icons/wi";
interface LocationProps {
  location: LocationType;
}

const Location: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className="rounded-lg w-auto h-full p-2  text-xs    md:text-sm flex-wrap     bg-stone-950  bg-opacity-30    ">
      <div className="flex text-3xl md:text-4xl text-white text- p-1 items-center">
        {location.is_day ? (
          <WiDaySunny className="text-yellow-200 w-40 h-40" />
        ) : (
          <WiMoonWaningCrescent3 className="text-yellow-800  w-32 h-32" />
        )}

        <p> {location.currTemp} °C</p>
      </div>
      <h1 className="text-3xl md:text-4xl text-white p-3">Today</h1>
      <div className=" text-white flex flex-col justify-center   gap-3  text-sm md:text-base">
        <p className="text-lg">Time: {location.time}</p>
        <p>
          {} City: {location.city}
        </p>
        <p>Country: {location.country}</p>
        <p>Region: {location.region}</p>
      </div>
    </div>
  );
};

export default Location;
