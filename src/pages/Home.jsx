import Navbar from "../components/navbar";
import homeIcon from "../assets/home.svg";

const Home = () => {
  return (
    <div className="home-container font-ralewey text-2xl">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2 h-screen text-4xl">
        <div className=" col-span-1  flex items-center pb-52 pl-20 ">
          <div className="text-center ">
            <h2> internship la porte du monde professionnel</h2>
          </div>
        </div>
        <div className=" col-span-1 flex justify-center pt- ">
          <img src={homeIcon} alt="home" className="w-4/5 h-4/5 " />
        </div>
      </div>
    </div>
  );
};

export default Home;
