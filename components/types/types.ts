export type ForecastType = {
  current: {
    cloud?: number;
    condition: {
      icon: string;
      text: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    last_updated: string;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    is_day: number;
  };
  forecast: {
    forecastday: Forecastday[];
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};
export type CurrentDay = {
  current: {
    cloud: number;
    condition: {
      icon: string;
      text: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    last_updated: string;
    last_updated_epoch: number;

    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
};
export type Forecastday = {
  astro: {
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
  };
  date: string;
  day: {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
  };
};
export type LocationType = {
  currTemp: number;
  time: string;
  city: string;
  country: string;
  region: string;
  is_day: number;
};
