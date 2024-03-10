import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import SearchSection from "../components/SearchSection";
import Searchbox from "../components/Searchbox";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchSection/>
      <MainSection/>
      <Player />
    </>
  );
};

export default Home;
