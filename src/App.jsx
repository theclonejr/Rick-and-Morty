import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import InfoLocation from "./components/InfoLocation";
import CardResidents from "./components/CardResidents";

function App() {
  const [locationId, setLocationId] = useState(
    Math.floor(Math.random() * 126) + 1
  );
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const [location, getLocation, isLoading, HasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationId]);

  const inputValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationId(inputValue.current.value.trim());
  };

  return (
    <div className="app">
      <div className="app__banner">
        <div className="app__filter">
          <div className="app__title-container">
            <h1 className="app__title"></h1>
          </div>
        </div>
      </div>
      <form className="app__form" onSubmit={handleSubmit}>
        <input className="app__input" ref={inputValue} type="text" />
        <button className="app__btn">Search</button>
      </form>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : HasError || locationId === "" || locationId === "0" ? (
        <h2>❌ Hey! you must provide an id from 1 to 126</h2>
      ) : (
        <>
          <InfoLocation location={location} />
          <div className="app__card-container">
            {location?.residents?.map((url) => (
              <CardResidents key={url} url={url} />
            ))}
          </div>
        </>
      )}
      <div className="credits">
        <p>Developed by Wences Reyes</p>
      </div>
    </div>
  );
}

export default App;
