import React from 'react'
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const Searchbox = () => {
    const { setSearchedSongs } = useContext(MusicContext);

  const searchSongs = async (e) => {
    const res = await axios.get(
      `https://saavn.dev/search/songs?query=${e.target.value}&page=1&limit=10`
    );
    const { data } = await res.data;
    if (
      data.results.length === 0 ||
      e.target.value === " " ||
      e.target.value.length === 0
    ) {
      setSearchedSongs([]);
    } else {
      setSearchedSongs(data.results);
    }

    console.log(data.results);
  };
  return (
    <>
     {/* Search */}
      
     <div className="visible lg:block">
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 rounded-full w-[40vw] outline-none text-center border text-black"
          placeholder="Search for songs"
          autoComplete="off"
          autoCorrect="off"
          onChange={searchSongs}
        />
      </div>
    
    </>
  )
}


export default Searchbox