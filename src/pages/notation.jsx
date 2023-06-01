import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bgformIcon from "../assets/bgform.jpg";

const Notation = () => {
  const [values, setValues] = useState({
    aptitude: "",
    initiative: "",
    innovation: "",
    acquired_knowledge: "",
    discipline: "",
  });

  const [finalMark, setFinalMark] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const calculateFinalMark = () => {
    const { aptitude, initiative, innovation, acquired_knowledge, discipline } =
      values;

    const marks = [
      parseFloat(aptitude) || 0,
      parseFloat(initiative) || 0,
      parseFloat(innovation) || 0,
      parseFloat(acquired_knowledge) || 0,
      parseFloat(discipline) || 0,
    ];

    const sum = marks.reduce((total, mark) => total + mark, 0);
    const finalMark = sum > 20 ? 20 : sum;

    if (sum > 20) {
      setShowError(true); // Display the error message
    } else {
      setShowError(false); // Hide the error message
    }

    setFinalMark(finalMark);
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
                    Internship Notation form
                  </h1>
                  <h2 className="text-black font-Mon font-semibold text-xl py-2 px-4">
                    Fill up the form to note the intern
                  </h2>
                </div>
                <form className="flex justify-center gap-20">
                  <div className="flex flex-col gap-4 text-black">
                    <div className="flex flex-col">
                      <label
                        htmlFor="aptitude"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Aptitude
                      </label>
                      <input
                        type="text"
                        name="aptitude"
                        value={values.aptitude}
                        onChange={handleInputChange}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="initiative"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Initiative
                      </label>
                      <input
                        type="text"
                        name="initiative"
                        value={values.initiative}
                        onChange={handleInputChange}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-black">
                    <div className="flex flex-col">
                      <label
                        htmlFor="innovation"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Innovation
                      </label>
                      <input
                        type="text"
                        name="innovation"
                        value={values.innovation}
                        onChange={handleInputChange}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="acquired_knowledge"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Acquired knowledge
                      </label>
                      <input
                        type="text"
                        name="acquired_knowledge"
                        value={values.acquired_knowledge}
                        onChange={handleInputChange}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-black">
                    <div className="flex flex-col">
                      <label
                        htmlFor="discipline"
                        className="text-black font-semibold text-base font-Mon"
                      >
                        Discipline
                      </label>
                      <input
                        type="text"
                        name="discipline"
                        value={values.discipline}
                        onChange={handleInputChange}
                        className="inputs px-2 border-2 border-primary rounded-md w-64"
                      />
                    </div>
                    <div>
                      <p className="font-bold">The final mark is:</p>
                      {showError && (
                        <p className="text-red-500">
                          The mark cannot exceed 20
                        </p>
                      )}
                      {!showError && (
                        <p className="font-semibold">{finalMark}</p>
                      )}
                    </div>
                  </div>
                </form>
                <div className="flex justify-center gap-24 pt-2">
                  <button
                    type="button"
                    onClick={calculateFinalMark}
                    className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
                  >
                    Calculate
                  </button>
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

export default Notation;
