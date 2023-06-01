import { useNavigate } from "react-router-dom";
import bgformIcon from "../assets/bgform.jpg";
import { useState } from "react";

const Presence = () => {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your submit logic here
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
                    Intern presence form
                  </h1>
                  <h2 className="text-black font-Mon font-semibold text-xl py-2 px-4">
                    Fill up the form to mark the presence
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="flex justify-center gap-20">
                  <div className="flex flex-col">
                    <label
                      htmlFor="status"
                      className="text-black font-semibold text-base"
                    >
                      Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      value={status}
                      onChange={handleStatusChange}
                      className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                    >
                      <option value="" disabled>Select status</option>
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="date"
                      className="text-black font-semibold text-base font-Mon"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={handleDateChange}
                      className="inputs px-2 border-2 border-primary rounded-md"
                    />
                  </div>
                </form>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
                    onClick={handleSubmit}
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

export default Presence;
