import NavbarHome from "../components/navbarHome";
import EmptyIcon from "../assets/Empty.svg";
import bgIcon from "../assets/bg.jpg";
const supervisorHome = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="supervisorHome" />
      </div>
    </div>
  );
};

export default supervisorHome;
