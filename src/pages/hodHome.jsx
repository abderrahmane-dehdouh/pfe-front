import navbarHome from "../components/navbarHome";
import EmptyIcon from "../assets/Empty.svg";

const supervisorHome = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div>
        <navbarHome />
      </div>
      <div className="">
        <div className="">
          <div>
            <a
              href=""
              className=""
            >
              Requests
            </a>
          </div>
          <div>
            <a
              href=""
              className=" "
            >
              Stage
            </a>
          </div>
        </div>
        <div className="">
          <div className="">
            <img src={EmptyIcon} alt="Empty" className="" />
          </div>
          
          </div>
        </div>
      </div>
    
  );
};

export default supervisorHome;