import { Link } from "react-router-dom";
import NavbarHome from "../components/navbarHome";
import bgIcon from "../assets/bg.jpg";

const internship = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="internship" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col justify-around text-base">
              <div className=" flex flex-row justify-around gap-7 pt-5 ">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>

                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex flex-row">
                    <p className="text-primary">First Name: </p>
                    <p id="first_name">Abderrahmane</p>
                  </div>

                  <div className="flex flex-row">
                    <p className="text-primary">Last Name: </p>
                    <p id="last_name">Dehdouh</p>
                  </div>
                  <div className="flex flex-row">
                    <p>title : </p>
                    <p id="title">mobile development</p>
                  </div>
                  <div className="flex flex-row">
                    <p>end date </p>
                    <p id="end_date">11/06/2023</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row justify-around gap-5">
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/presence"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        Mark presence
                      </Link>
                    </div>
                    <div className=" flex flex-col items-end">
                      <Link
                        to="/notation"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2  h-9 text-center"
                      >
                        note the intern
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default internship;
