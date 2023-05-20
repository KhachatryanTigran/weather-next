"use client";

import React from "react";
import Card from "./Card";
import { ForecastType } from "./types/types";
interface ForecastProps {
  forecast: ForecastType | undefined;
}
const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="flex ">
      <Card></Card> <Card></Card>
      <Card></Card>
    </div>
  );
};

export default Forecast;
