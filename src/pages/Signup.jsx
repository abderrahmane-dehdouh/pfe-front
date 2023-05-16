import { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import loginIcon from "../assets/login.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("/api/signup", { email, password });
      // handle successful signup here
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="signup-container font-ralewey text-2xl">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <img src={loginIcon} alt="login" className=" " />
        </div>
        <div className="col-span-1 flex items-center mt-28">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-primary rounded-md w-96 h-9 placeholder:text-sm "
              placeholder="@univ-constantine2.dz"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>

            <input
              className="border-2 border-primary rounded-md w-96 h-9 "
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className=" flex flex-col items-end">
              <input
                className="border-2 border-primary rounded-md w-96 h-9"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />

              <a href="login" className="text-xs ">
                login
              </a>
            </div>

            <button type="button" onClick={handleTogglePassword}>
              {showPassword ? "Hide" : "Show"}
            </button>

            <div className="flex justify-center">
              <button
                type="submit"
                className="focus:outline-none text-white bg-primary hover:bg-purple-950 font-semibold rounded-lg text-sm  px-5 py-2.5 mb-2 w-20 h-9 "
              >
                Login
              </button>
            </div>

            {errorMsg && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
