import { useState, useEffect } from "react";
import SearchButton from "../components/SearchButton";
import DeleteButton from "../components/DeleteButton";
import "../css/SearchHistory.css";

export default function SearchHistory({ setSearchResult }) {
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchByHistory = async (sh) => {
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${sh.coord.lat}&lon=${sh.coord.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSearchResult(result);
        setSearchHistory((prev) => {
          // push to local storage, no need to check exists because already done in parent
          const arrResult = [...prev, result];
          localStorage.setItem("searchHistory", JSON.stringify(arrResult));
          return arrResult;
        });
      });
  };

  const handleDeleteHistory = (sh) => {
    setSearchHistory((prev) => {
      const result = prev.filter((item) => item.dt !== sh.dt);
      localStorage.setItem("searchHistory", JSON.stringify(result));
      return result;
    });
  };

  useEffect(() => {
    setSearchHistory(JSON.parse(localStorage.getItem("searchHistory")));
  }, [localStorage.getItem("searchHistory")]);

  return (
    <>
      <p className="subtitle" style={{ textAlign: "left" }}>
        Search History
      </p>
      {searchHistory
        .sort((a, b) => b.dt - a.dt)
        .map((sh, i) => (
          <div key={i} className="Search-history-item Glass-card">
            <div className="Search-history-item-content">
              <span className="subtitle">
                {sh.name}, {sh.sys?.country}
              </span>
              <span className="subtitle">
                {new Date(sh.dt * 1000).toLocaleTimeString()}
              </span>
            </div>
            <SearchButton
              onClickFunc={() => handleSearchByHistory(sh)}
              style={{ marginRight: "5px" }}
            />
            <DeleteButton onClickFunc={() => handleDeleteHistory(sh)} />
          </div>
        ))}
    </>
  );
}
