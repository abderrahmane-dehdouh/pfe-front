import { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import loginIcon from "../assets/login.svg";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const validateEmail = () => {
    const pattern = /^[a-zA-Z0-9_.+-]+@univ-constantine2\.dz$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await axios.post("/api/signup", { firstName, lastName, email, password });
      // Gérer l'inscription réussie ici
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
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="border-2 border-primary rounded-md w-40 h-9 placeholder:text-sm"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="border-2 border-primary rounded-md w-40 h-9 placeholder:text-sm"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className={`border-2 border-primary rounded-md w-96 h-9 placeholder:text-sm ${email && !validateEmail() ? "border-red-500 " : ""}`}
                placeholder="@univ-constantine2.dz"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              {email && !validateEmail() && <p className="text-red-500 text-xs">Veuillez entrer votre adresse e-mail professionnelle </p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="border-2 border-primary rounded-md w-96 h-9"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="border-2 border-primary rounded-md w-96 h-9"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className=" flex flex-col items-end">
              <a href="login" className="text-xs">
                login
              </a>
            </div>
            <button type="button" onClick={handleTogglePassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
            <div className="flex justify-center">
              <button
                type="submit"
                className="focus:outline-none text-white bg-primary hover:bg-purple-950 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 w-20 h-9"
              >
                Login
              </button>
            </div>
            {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
