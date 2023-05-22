import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import studentHome from "./pages/studentHome";
import supervisorHome from "./pages/supervisorHome";
import hodHome from "./pages/hodHome";
import signupForm from "./pages/signupForm";
import requestForm from "./pages/RequestForm";
import Requests from "./pages/Requests";
import account from "./pages/account";
import accountManagment from "./pages/accountManagment";
import newaccountForm from "./pages/newaccountForm";
import internship from "./pages/internship";
import notation from "./pages/notation";
import presence from "./pages/presence";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/presence" Component={presence} />
        <Route path="/notation" Component={notation} />
        <Route path="/internship" Component={internship} />
        <Route path="/newaccountForm" Component={newaccountForm} />
        <Route path="/accountManagment" Component={accountManagment} />
        <Route path="/account" Component={account} />
        <Route path="/Requests" Component={Requests} />
        <Route path="/requestForm" Component={requestForm} />
        <Route path="/signupForm" Component={signupForm} />
        <Route path="/hodHome" Component={hodHome} />
        <Route path="/supervisorHome" Component={supervisorHome} />
        <Route path="/studentHome" Component={studentHome} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/Home" Component={Home} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
