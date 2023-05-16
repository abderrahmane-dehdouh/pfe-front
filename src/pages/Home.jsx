import Navbar from "../components/navbar";
import homeIcon from "../assets/home.svg";

const home = () => {
  return (
    <div className="home-container font-ralewey text-2xl">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2 ">
        <div className=" col-span-1 flex items-center justify-center ">

          <div className=" ">
              <h2> intership votre pasrelle au monde profetionnel</h2>
          </div>
        </div>
        <div className=" col-span-1 w-full h-full  bg-cover bg-center">
          <img src={homeIcon} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default home;
