import Error from "next/error";

const fetchwWeather = async (city: string, days: string) => {
  try {
    return await (
      await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=45fd324fcb36497bae5111643232804&q=${city}&days=${days}`
      )
    ).json();
  } catch (err) {
    console.log(err);
  }
};
export default fetchwWeather;
