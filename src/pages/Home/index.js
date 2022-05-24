import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";


const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const {loading, gifs} = useGifs()

  const handleSubmit = (e) => {
    e.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search a GIF..."
          type="text"
          value={keyword}
        />
      </form>
      <h3 className="App-title">Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
