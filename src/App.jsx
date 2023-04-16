import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-[url(/images/start.png)]">
      <div className="-translate-y-[40%]">
        <img
          className="mx-auto animate-spin-slow"
          src="/images/portal.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="mx-auto absolute sm:w-[550px] sm:left-[50px] top-4 md:left-[300px] md:animate-pulse sm:animete-pulse  lg:left-[410px] 2xl:left-[520px] "
          src="/images/logo.png"
          alt=""
        />
      </div>

      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-center py-8">
          <input
            className="border-green-400 bg-black text-[#938686] font-bold px-12 py-2  border-[2px]"
            id="locationId"
            placeholder="Type a location id ..."
            type="text"
          />

          <button className="text-white border-green-500 bg-green-800/50 border-[2px] py-[8px] px-10 ">
            Search
            <i className="absolute px-4 -translate-y-[-5px] mx-auto  bx bx-search-alt-2 "></i>
          </button>
        </div>

        <h2 className="text-green-400 text-center font-bold text-xl">
          Welcome to the crazy universe!
        </h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
