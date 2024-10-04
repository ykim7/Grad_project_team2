import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import locationLogo from "../logos/location-pin-alt-1-svgrepo-com.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { fomateDate } from "../utils/dateUtils";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/actions/authActions";
import Button from "./Button";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [weatherInfo, setWeatherInfo] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(clearUser());
    navigate("/main");
  };

  const renderBasedOnRole = (role) => {
    if (role === "Administrative staff") {
      return (
        <div>
          <span className="font-bold">Welcome Administrative staff!</span>
        </div>
      );
    } else if (role === "Professor") {
      return (
        <div>
          <span className="font-bold">Welcome Professor</span>
        </div>
      );
    } else if (role === "Student") {
      return (
        <div>
          <span className="font-bold">Welcome Student!</span>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const getWeather = async () => {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // Get the current weather based on users' location
        const positionString = `${latitude},${longitude}`;
        const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${positionString}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setWeatherInfo(data);
          })
          .catch((err) => console.error("Error fetching weather data:", err));
      });
    };
    getWeather();
  }, []);

  return (
    <>
      <div className="container p-5 flex justify-center">
        <div className="flex-1 flex justify-center items-center">
          {user ? (
            <div>
              <span className="font-bold">Hi, there</span>
              <div>
                <span className="font-bold">
                  {user.firstName} {user.lastName} ({user.email} )/ {user.role}
                </span>
              </div>
              {renderBasedOnRole(user.role)}
            </div>
          ) : (
            <span className="font-bold">Welcome to the commnuity</span>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center w-full h-24 rounded-xl bg-gradient-to-r from-weather-color1 to-weather-color2 p-3">
          {weatherInfo ? ( // Check if weatherInfo is defined
            <>
              <div className="w-[30%] flex justify-center">
                <span className="text-white text-5xl">
                  {weatherInfo.current.temp_c}°
                </span>
              </div>
              <div className="w-[40%] flex flex-col text-xs text-white font-abel mt-auto">
                <span className="text-lg">
                  {weatherInfo.current.condition.text}
                </span>
                <span>{fomateDate(weatherInfo.location.localtime)}</span>
                <span className="flex">
                  <img src={locationLogo} />
                  {weatherInfo.location.name}, {weatherInfo.location.region}
                </span>
              </div>
              <div className="w-[30%]">
                <img
                  src={weatherInfo.current.condition.icon}
                  alt="Weather Icon"
                />
              </div>
            </>
          ) : (
            // Render a loading or placeholder element when weatherInfo is undefined
            <div>Loading weather data...</div>
          )}
        </div>
        <div className="ml-auto flex-1 flex space-x-5 justify-end">
          {user ? (
            <div className="flex flex-col space-y-2">
              <Link to="/Main">
                <Button name={"Logout"} onClick={logoutHandler} />
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button name={"Login"} />
              </Link>
              <Link to="/register">
                <Button name={"Register"} />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
