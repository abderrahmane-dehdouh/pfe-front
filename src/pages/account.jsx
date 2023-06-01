import { RiAccountCircleLine } from "react-icons/ri";
import bgformIcon from "../assets/bgform.jpg";
import { useState } from "react";

const Account = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
                    <RiAccountCircleLine className="text-7xl cursor-pointer" />
                  </h1>
                  <h2 className="text-black font-semibold text-xl py-2 px-4">
                    Abderrahmane dehdouh
                  </h2>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">date of birth :</h2>
                      <h2 className="font-medium">26/11/2002</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">studentcard number :</h2>
                      <h2 className="font-medium">202034030531</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">place of birth :</h2>
                      <h2 className="font-medium">Constantine</h2>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">Major :</h2>
                      <h2 className="font-medium">L3</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">department :</h2>
                      <h2 className="font-medium">ifa</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">specialty :</h2>
                      <h2 className="font-medium">ti</h2>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">ssn :</h2>
                      <h2 className="font-medium">00000000000000000</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">semestre :</h2>
                      <h2 className="font-medium">6</h2>
                    </div>
                    <div className="flex flex-row py-2">
                      <h2 className="font-bold">phone number :</h2>
                      <h2 className="font-medium">0558303617</h2>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h2 className="font-extrabold text-primary">Edit Password</h2>
                </div>
                <form onSubmit={handleSubmit} className="">
                  <div className="flex justify-center">
                    <div className="flex flex-col">
                      <label className="font-semibold" htmlFor="old_password">
                        old password
                      </label>
                      <input
                        className="border-2 border-primary rounded-md w-56"
                        type="password"
                        id="old_password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center gap-24">
                    <div className="flex flex-col">
                      <label className="font-semibold" htmlFor="new_password">
                        new password
                      </label>
                      <input
                        className="border-2 border-primary rounded-md w-56"
                        type="password"
                        id="new_password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold" htmlFor="confirm_new_password">
                        confirm new password
                      </label>
                      <input
                        className="border-2 border-primary rounded-md w-56"
                        id="confirm_new_password"
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row pt-2 justify-center gap-7">
                    <div>
                      <button
                        type="button"
                        className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
                      >
                        cancel
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-900 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9 text-center"
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

export default Account;
