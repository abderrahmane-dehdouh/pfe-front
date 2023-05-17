import { RiAccountCircleLine } from "react-icons/ri";

const account = () => {
  return (
    <div className="relative font-ralewey">
      <div className="bg-yellow-500 h-screen w-screen flex flex-col items-center justify-center gap-28 lg:gap-8">
        <div className="flex justify-center pt-16 lg:pt-4 z-10"></div>
        <div className="flex flex-col gap-2 bg-white rounded-3xl w-fit h-fit z-10 p-3 relative">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-black font-Pop font-bold text-4xl text-center">
              <RiAccountCircleLine className="text-7xl cursor-pointer" />
            </h1>
            <h2 className="text-black  font-semibold text-xl py-2 px-4">
              Abderrahmane dehdouh
            </h2>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="flex flex-col ">
              <div className="flex flex-row py-2">
                <h2 className="font-bold">date of birth : </h2>
                <h2 className="font-medium">26/11/2002</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">studentcard number : </h2>
                <h2 className="font-medium">202034030531</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">place of birth : </h2>
                <h2 className="font-medium">Constantine</h2>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row py-2">
                <h2 className="font-bold">Major : </h2>
                <h2 className="font-medium">L3</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">department : </h2>
                <h2 className="font-medium">ifa</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">specialty : </h2>
                <h2 className="font-medium">ti</h2>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row py-2">
                <h2 className="font-bold">ssn : </h2>
                <h2 className="font-medium">00000000000000000</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">semestre : </h2>
                <h2 className="font-medium">6</h2>
              </div>
              <div className="flex flex-row py-2">
                <h2 className="font-bold">phone number : </h2>
                <h2 className="font-medium">0558303617</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <h2 className="font-bold">Edit Password</h2>
          </div>
          <form action="" className="">
            <div className="flex flex-row justify-center gap-24">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="new_password">
                  new password
                </label>
                <input
                  className="  border-2 border-primary  rounded-md w-56   "
                  type="password"
                  id="new_password"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="confirm_new_password">
                  confirm new password
                </label>

                <input
                  className="border-2 border-primary rounded-md w-56  "
                  id="confirm_new_password"
                />
              </div>
            </div>
          </form>
          <div className=" flex flex-row justify-center gap-7">
            <div>
            <button
                  type="cancel"
                  className="flex justify-center focus:outline-none text-white bg-red-500 hover:bg-red-700 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 text-center"
                >
                  cancel
                </button>
            </div>

            <div>
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
  );
};

export default account;
