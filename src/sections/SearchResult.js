import Error from "../components/Error";
import sun from "../asset/sun.png";
import "../css/SearchResult.css";

export default function SearchResult({ searchResult, searchResultError }) {
  return (
    <div className="Search-result-container">
      {searchResultError && <Error errorMessage={searchResultError} />}
      {searchResult && (
        <div className="Search-result Glass-card">
          <div className="col-12 Search-result-headline">
            <p className="title" style={{ margin: 0 }}>
              Today's weather
            </p>
            <p className="headline" style={{ margin: 0 }}>
              {Math.round(searchResult.main?.temp - 273.15)}&#8451;
            </p>
            <p className="subtitle" style={{ margin: 0 }}>
              H: {Math.round(searchResult.main?.temp_max - 273.15)}&#8451; L:{" "}
              {Math.round(searchResult.main?.temp_min - 273.15)}&#8451;
            </p>
          </div>
          <img src={sun} alt="sun" className="Search-result-image" />
          <div className="Search-result-content">
            <div className="col-4 Search-result-country-container">
              <span className="Search-result-country caption">
                {searchResult.name}, {searchResult.sys.country}
              </span>
            </div>
            <div className="col-8 Search-result-responsive">
              <span className="caption">{new Date(searchResult.dt * 1000).toLocaleString()}</span>
              <span className="caption">humidity: {searchResult.main?.humidity}</span>
              <span className="caption">{searchResult.weather[0].description}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
