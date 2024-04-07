import { useState } from "react";
import countries from "../asset/countries";
import SearchButton from "../components/SearchButton";
import "../css/Search.css";

export default function Search({ setSearchResult, setSearchResultError }) {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const search = async () => {
    const locations = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}, ${countryCode}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => result);
    if (locations[0])
      return await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locations[0].lat}&lon=${locations[0].lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setSearchResult(result);
          // push to local storage, no need to check exists because already done in parent
          let arr = JSON.parse(localStorage.getItem("searchHistory"));
          arr.push(result);
          localStorage.setItem("searchHistory", JSON.stringify(arr));
        });
    else setSearchResultError("Not found.");

    setCity("");
    setCountryCode("");
  };

  const handleCityChange = async (e) => {
    setSearchResultError(null);
    setCity(e.target.value);
  };

  const handleCountryChange = async (e) => {
    setSearchResultError(null);
    if (e.target.value) {
      const countryRes = countries.filter(
        (c) =>
          c.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 ||
          c.code.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
      setCountryCode(countryRes[0] ?? "");
    }
  };

  return (
    <div className="Search-container">
      <div className="Search-row">
        <input
          type="search"
          placeholder="City"
          className="Search-input"
          onChange={handleCityChange}
        />
      </div>
      <div className="Search-row">
        <input
          type="search"
          placeholder="Country"
          className="Search-input"
          onChange={handleCountryChange}
        />
        <SearchButton onClickFunc={search} />
      </div>
    </div>
  );
}
