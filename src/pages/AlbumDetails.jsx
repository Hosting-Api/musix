import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import MusicContext from "../context/MusicContext";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import SongsList from "../components/SongsList";
import SearchSection from "../components/SearchSection";

const AlbumDetails = () => {
  const { setSongs } = useContext(MusicContext);
  const [album, setAlbum] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  const getAlbumDetails = async () => {
    // const res = await axios.get(`https://saavn.dev/albums?id=${id}`);
    const res = await axios.get(`https://saavn.dev/search/songs?id=${id}`);
    // https://www.saavn.com/s/playlist/73752f9695a003d829ac0b7fdf1b35c5/chill/Uo2Wx5EBZO2pQbPNOQ1jmw__
    const { data } = await res.data;
    console.log(data);
    setAlbum(data);
    setSongs(data.songs);
    setImage(getImg(data.image));
  };

  const getImg = (image) => (image = image[2].link);

  useEffect(() => {
    getAlbumDetails();
  }, []);

  return (
    <>
      <Navbar />
      <SearchSection />
      <br />
      <br />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto">
        <div>
          <img
            src={image}
            alt={album.title}
            width={250}
            className="mx-auto mb-4 rounded-lg"
          />
          <div className="w-[250px] text-gray-600">
            <h1>{album.name}</h1>
            <p>
              by {album.primaryArtists} . {album.songCount} songs
            </p>
          </div>
        </div>

        <div>
          {album.songs?.map((song) => (
            <SongsList key={song.id} {...song} />
          ))}
        </div>
      </div>

      <Player />
    </>
  );
};

export default AlbumDetails;
