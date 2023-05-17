import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import studentHome from "./pages/studentHome";
import supervisorHome from "./pages/supervisorHome";
import signupForm from "./pages/signupForm";
import requestForm from "./pages/RequestForm";
import Requests from "./pages/Requests";
import account from "./pages/account";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/account" Component={account} />
      <Route path="/Requests" Component={Requests} />
        <Route path="/requestForm" Component={requestForm} />
        <Route path="/signupForm" Component={signupForm} />
        <Route path="/supervisorHome" Component={supervisorHome} />
        <Route path="/studentHome" Component={studentHome} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/Home" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
