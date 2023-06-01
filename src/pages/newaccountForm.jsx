import { useNavigate } from "react-router-dom";
import bgformIcon from "../assets/bgform.jpg";
import { useState } from "react";

const newaccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [hodEmail, setHodEmail] = useState("");
  const [hodPassword, setHodPassword] = useState("");
  
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="relative font-ralewey">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="relative">
          <img src={bgformIcon} alt="login" className="w-fit h-fit" />

          <div className="absolute top-0 left-0 w-full h-full">
            <div className="bg-primary opacity-50 w-full h-full absolute"></div>

            <div className="absolute flex w-full h-full justify-center items-center">
              <div className="flex flex-col gap-2 bg-white rounded-3xl p-3">
                <div className="flex flex-col gap-1 items-center">
                  <h1 className="text-black font-Pop font-bold text-4xl text-center">
                    create a new hod account
                  </h1>
                  <h2 className="text-black font-ralewey font-semibold text-xl py-2 px-4">
                    Fill up the form
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="flex justify-center">
                  <div className="flex flex-col gap-4 text-black px-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor="First_Name"
                        className="text-black font-semibold text-base font-ralewey"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="First_Name"
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="Last_Name"
                        className="text-black font-semibold text-base font-ralewey"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="Last_Name"
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="dep_name"
                        className=" font-semibold text-base "
                      >
                        Department
                      </label>
                      <select
                        name="dep_name"
                        id="dep_name"
                        className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option
                          value="TLSI"
                          className=" text-base font-semibold"
                        >
                          TLSI
                        </option>
                        <option
                          value="IFA"
                          className=" text-base font-semibold"
                        >
                          IFA
                        </option>
                      </select>
                    </div>
                  </div>
                  <div div className="flex flex-col gap-4 text-black px-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor="hod_email"
                        className="text-black font-semibold text-base font-ralewey"
                      >
                        hod E-mail
                      </label>
                      <input
                        type="email"
                        name="hod_email"
                        className="inputs px-2 border-2 border-primary rounded-md w-64 "
                        value={hodEmail}
                        onChange={(e) => setHodEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="hod_password"
                        className="text-black font-semibold text-base font-ralewey"
                      >
                        hod Password
                      </label>
                      <input
                        type="password"
                        name="hod_password"
                        className="inputs px-2 border-2 border-primary rounded-md w-64 "
                        value={hodPassword}
                        onChange={(e) => setHodPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col"></div>

                  {/* separation */}
                </form>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newaccountForm;
