import React, { useState, useEffect } from "react";
import Card from "./Card";
import searchImages from "./helper/getImages";
import { ImageData } from "./types/interface";
import { ForecastType } from "./types/types";
interface TodayCardProps {
  forecast: ForecastType | undefined;
}
const TodayCard: React.FC<TodayCardProps> = ({ forecast }) => {
  const [timer, setTimer] = useState<number>(0);
  const [weatherPhotos, setWeatherPhotos] = useState<ImageData[]>([
    { urls: { full: "" }, alt_description: "" },
  ]);
  const [image, setImage] = useState<ImageData>({
    urls: { full: "" },
    alt_description: "",
  });
  useEffect(() => {
    const getTimer = () => {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        getTimer();
        setTimer((prevTime: number) => prevTime + 1);
      }, 10000);
      return timeoutId;
    };

    const timeoutId: NodeJS.Timeout = getTimer();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (weatherPhotos.length > 0) {
      setImage(weatherPhotos[timer % weatherPhotos.length]);
    }
  }, [timer, weatherPhotos]);

  useEffect(() => {
    searchImages(
      `${forecast?.current?.condition.text || "weather"}  `,
      30
    ).then((res) => setWeatherPhotos(res));
  }, [forecast]);

  return (
    <div className="flex py-2     ">
      <Card
        image={image}
        condition={forecast?.current.condition.text}
        temperature={forecast?.current.temp_c}
        pressure={forecast?.current.pressure_mb}
        humidity={forecast?.current.humidity}
        precipitation={forecast?.current.precip_mm}
        wind={forecast?.current.wind_kph}
        icon={forecast?.current.condition.icon}
        is_day={forecast?.current.is_day}
      />
    </div>
  );
};

export default TodayCard;
