"use client";

import React from "react";

const Forecast = () => {
  const getForecast = async () => {
    const forecast = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=45fd324fcb36497bae5111643232804&q=07112&days=7"
    );
    console.log(forecast.json());
  };
  getForecast();
  return <div>Forecast</div>;
};

export default Forecast;
