import { useNavigate } from "react-router-dom";

import { useState } from "react";

const requestForm = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative font-ralewey ">
      <div className="bg-yellow-500 h-screen w-screen flex flex-col items-center justify-center gap-28 lg:gap-8">
        <div className="flex justify-center pt-16 lg:pt-4 z-10"></div>
        <div className="flex flex-col gap-2 bg-white rounded-3xl w-fit h-fit z-10 p-3 relative">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-black font-Pop font-bold text-4xl text-center">
              Internship application form
            </h1>
            <h2 className="text-black font-Mon font-semibold text-xl py-2 px-4">
              Fill up the form to apply for an internship
            </h2>
          </div>
          <form action="" className="flex justify-center gap-20">
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
                  className="inputs px-2 border-2 border-primary rounded-md w-64"
                />
              </div>
            </div>
            <div div className="flex flex-col gap-4 text-black">
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
                  className="inputs px-2 border-2 border-primary rounded-md w-64 "
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
                  className="inputs px-2 border-2 border-primary rounded-md w-64"
                />
              </div>
            </div>

            {/* separation */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default requestForm;
