import { useState } from "react";
import bgformIcon from "../assets/bgform.jpg";

const SignupForm = () => {
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("TLSI");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [academicYear, setAcademicYear] = useState("2022/2023");
  const [education, setEducation] = useState("L3");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setSelectedDepartment(selectedDepartment);

    if (selectedDepartment === "IFA") {
      setSelectedMajor("STIC");
    } else if (selectedDepartment === "TLSI") {
      setSelectedMajor("GL");
    } else {
      setSelectedMajor("");
    }
  };

  const handleMajorChange = (e) => {
    const selectedMajor = e.target.value;
    setSelectedMajor(selectedMajor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
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
                    Almost Done
                  </h1>
                  <h2 className="text-black font-semibold text-xl py-2 px-4">
                    Fill up the form
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="flex justify-center gap-20">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-col gap-4 text-black">
                        <div className="flex flex-col">
                          <label htmlFor="B_date" className="text-black font-semibold text-base">
                            Birth Day
                          </label>
                          <input
                            type="date"
                            name="B_date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="inputs font-ralewey font-medium px-2 border-2 border-primary rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="B_place" className="text-black font-semibold text-base">
                            Birth Place
                          </label>
                          <input
                            type="text"
                            name="B_place"
                            value={birthPlace}
                            onChange={(e) => setBirthPlace(e.target.value)}
                            className="inputs font-ralewey font-medium px-2 border-2 border-primary rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="Card_num" className="text-black font- text-base">
                            Student Card Number
                          </label>
                          <input
                            type="text"
                            name="Card_num"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="inputs font-ralewey font-medium px-2 border-2 border-primary rounded-md"
                          />
                        </div>
                      </div>
                      {/* separation */}
                      <div className="flex flex-col gap-4 text-black">
                        <div className="flex flex-col">
                          <label htmlFor="dep_name" className="font-semibold text-base">
                            Department
                          </label>
                          <select
                            name="dep_name"
                            id="dep_name"
                            className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                            onChange={handleDepartmentChange}
                            required
                          >
                            <option value="TLSI" className="text-base font-semibold">
                              TLSI
                            </option>
                            <option value="IFA" className="text-base font-semibold">
                              IFA
                            </option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="major" className="font-semibold text-base">
                            Major
                          </label>
                          <select
                            name="major"
                            id="major"
                            className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                            onChange={handleMajorChange}
                            required
                          >
                            {selectedDepartment === "IFA" ? (
                              <option value="STIC" className="text-base font-semibold">
                                STIC
                              </option>
                            ) : (
                              <option value="GL" className="text-base font-semibold">
                                GL
                              </option>
                            )}
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="ac_year" className="text-black font-semibold text-base">
                            Academic Year
                          </label>
                          <select
                            name="ac_year"
                            id="ac_year"
                            className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                            value={academicYear}
                            onChange={(e) => setAcademicYear(e.target.value)}
                          >
                            <option value="2022/2023" className="text-base font-semibold">
                              2022/2023
                            </option>
                            <option value="2021/2022" className="text-base font-semibold">
                              2021/2022
                            </option>
                            <option value="2020/2021" className="text-base font-semibold">
                              2020/2021
                            </option>
                            <option value="2019/2020" className="text-base font-semibold">
                              2019/2020
                            </option>
                            <option value="2018/2019" className="text-base font-semibold">
                              2018/2019
                            </option>
                            <option value="2017/2018" className="text-base font-semibold">
                              2017/2018
                            </option>
                          </select>
                        </div>
                      </div>
                      {/* separation*/}
                      <div className="flex flex-col gap-4 text-black">
                        <div className="flex flex-col">
                          <label htmlFor="education" className="text-black font-semibold text-base">
                            Education
                          </label>
                          <select
                            name="education"
                            id="education"
                            className="selectInputs font-ralewey font-medium border-primary border-2 rounded-md"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                          >
                            <option value="L3" className="text-base font-semibold">
                              L3
                            </option>
                            <option value="M1" className="text-base font-semibold">
                              M1
                            </option>
                            <option value="M2" className="text-base font-semibold">
                              M2
                            </option>
                            <option value="D1" className="text-base font-semibold">
                              D1
                            </option>
                            <option value="D2" className="text-base font-semibold">
                              D2
                            </option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="phone" className="text-black font-semibold text-base">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="inputs font-ralewey font-medium px-2 border-2 border-primary rounded-md"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="ssn"
                            className="text-black font-semibold text-base"
                          >
                            Social Security Number
                          </label>
                          <input
                            type="text"
                            name="ssn"
                            value={socialSecurityNumber}
                            onChange={(e) => setSocialSecurityNumber(e.target.value)}
                            className="inputs font-ralewey font-medium px-2 border-2 border-primary rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    {/* separation */}
                    
                    <div className="flex flex-col items-center justify-center mt-5">
                      <button
                        type="submit"
                        className="btn bg-primary text-white px-8 py-2 rounded-full font-semibold text-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
