import React from "react";
import Card from "./Card";
import { ForecastType } from "./types/types";
interface ForecastProps {
  forecast: ForecastType | undefined;
}
const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="flex  flex-wrap  justify-center  gap-1">
      {forecast?.forecast &&
        forecast?.forecast.forecastday.map((day) => {
          return (
            <Card
              key={day.date}
              condition={day.day.condition.text}
              temperature={day.day.maxtemp_c}
              humidity={day.day.humidity}
              precipitation={day.day.totalprecip_mm}
              wind={day.day.maxwind_kph}
              icon={day.day.condition.icon}
              day={day.date}
            />
          );
        })}
    </div>
  );
};

export default Forecast;
