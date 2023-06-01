import { useNavigate } from "react-router-dom";
import bgformIcon from "../assets/bgform.jpg";

import { useState } from "react";

const RequestForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [endDate, setEndDate] = useState("");
  
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
                    Internship application form
                  </h1>
                  <h2 className="text-black font-Mon font-semibold text-xl py-2 px-4">
                    Fill up the form to apply for an internship
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="flex justify-center gap-20">
                  <div className="flex flex-col gap-4 text-black">
                    <div className="flex flex-col">
                      <label
                        htmlFor="title"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="Start_date"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        name="Start_date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-black">
                    <div className="flex flex-col">
                      <label
                        htmlFor="supervisor_email"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Supervisor E-mail
                      </label>
                      <input
                        type="email"
                        name="supervisor_email"
                        value={supervisorEmail}
                        onChange={(e) => setSupervisorEmail(e.target.value)}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="End_date"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        End date
                      </label>
                      <input
                        type="date"
                        name="End_date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                  </div>

                  {/* separation */}
                </form>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
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

export default RequestForm;
