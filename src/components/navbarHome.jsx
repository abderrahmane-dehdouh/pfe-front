import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavbarHome = ({ page }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between font-ralewey text-2xl my-5 mx-16">
      <div className="flex justify-start text-5xl">
        <h1 className="text-primary">InternShip</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          {(page === "hodHome") && (
            <Link to="/accountManagment" className="mx-2">
              Manage Accounts
            </Link>
          )}
        </div>
        <Link to="/Requests" className="mx-2">
          Requests
        </Link>
        {(page === "studentHome" || page === "supervisorHome" || page === "Requests" || page === "internship") && (
            <Link
              to="/internship"
              className="mx-2"
            >
              internship
            </Link>
          )}
      </div>
      <div className="flex justify-end items-center">
        <RiAccountCircleLine
          className="text-3xl cursor-pointer"
          onClick={handleIconClick}
        />

        {showMenu && (
          <ul className="absolute right-32 top-0 bg-white border border-gray-300 rounded-lg text-base">
            <li className="hover:bg-gray-100 transition ease-in duration-200 p-1 border-b border-gray-300">
              <Link to="/account" className="">
                Account
              </Link>
            </li>
            <li className="hover:bg-gray-100 transition ease-in duration-200 p-1">
              <Link to="/logout" className="text-red-600">
                Log Out
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarHome;
