import { Link } from "react-router-dom";
import NavbarHome from "../components/navbarHome";
import bgIcon from "../assets/bg.jpg";

const Requests = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-row justify-around text-base">
              <div className=" flex flex-col gap-7 pt-5 ">
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>

                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>

                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-7 pt-5">
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-7 pt-5">
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
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
                    <p>duration : </p>
                    <p id="duration">15 days</p>
                  </div>
                  <div className="flex flex-row">
                    <p>company: </p>
                    <p id="company">Ooredoo</p>
                  </div>
                  <div className="flex flex-row">
                    <p>status : </p>
                    <p id="status">pending</p>
                  </div>
                  <div className="flex flex-row justify-around">
                    <div>
                      <button
                        type="refus"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        refus
                      </button>
                    </div>
                    <div>
                      <button
                        type="Accept"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        Accept
                      </button>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
