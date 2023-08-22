import { getIcon, getWeather } from "@/pages/api/weather";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Weather = () => {
  const [query, setQuery] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [icon, setIcon] = useState();
  const [imageData, setImageData] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const getWeatherByLocation = async (e: any) => {
    e.preventDefault();
    await getWeather(query).then(async (res) => {
      if (res.status === 200) {
        setCurrentWeather(res.data);
        await getIcon("04d").then((response) => {
          setImageData(response.data);
          const blob = new Blob([response.data], { type: "image/png" });

          // Create a data URL from the Blob object
          const url = URL.createObjectURL(blob);
          console.log(url);
          setDataUrl(url);
        });
      }
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          getWeatherByLocation(e);
        }}
      >
        <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
      <>
        <div className="card bg-purple-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10">
          <h4 className="text-2xl">{currentWeather?.name}</h4>
          <Image src={dataUrl} height={100} width={100} alt="next" />
          <h2 className="text-5xl font-bold mb-2">
            {currentWeather?.main?.temp}
          </h2>
          <p>{currentWeather?.weather[0]?.main}</p>
        </div>
      </>
    </div>
  );
};

export default Weather;
