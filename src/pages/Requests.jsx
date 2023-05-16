import { Link } from "react-router-dom";
import NavbarHome from "../components/navbarHome";

const Requests = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome />
      </div>
      <div className="flex justify-end items-end">
        <Link
          to="/RequestForm"
          className="focus:outline-none text-white bg-primary hover:bg-purple-950  font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 h-9"
        >
          add an internship request
        </Link>
      </div>
    </div>
  );
};

export default Requests;
