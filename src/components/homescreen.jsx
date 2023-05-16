import { Link } from "react-router-dom";

const HomeScreen = ({ page }) => {
  return (
    
      <div className="flex flex-col w-72 h-screen bg-secondary ">
        <a href="/Requests" className="flex justify-center py-10 border-b-2 w-72 border-black">requests</a>
        <a href="/Internship" className="flex justify-center py-10 border-b-2 w-72 border-black">Internship</a>
      </div>
    
   
  );
};

export default HomeScreen;
