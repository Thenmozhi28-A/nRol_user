import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Forgot from "./auth/Forgot";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Practice from "./pages/Practice";
import Test from "./pages/Test";
import Communication from "./pages/Communication";
import Interview from "./pages/Interview";
import Settings from "./pages/Settings";
import Build from "./pages/Build";
import PersonalInformation from "./pages/PersonalInformation";
import { Navigate } from "react-router-dom";
import Job from "./pages/Job";
import Linked from "./pages/Linked";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="profile/build" element={<Build />} />

          <Route path="/code-practice" element={<Practice />} />
          <Route path="/skill-test" element={<Test />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/interview" element={<Interview />} />

          <Route path="/settings" element={<Settings />}>
            <Route index element={<Navigate to="personal-information" />} />
            <Route path="personal-information" element={<PersonalInformation />} />
            <Route path="job-seeker-status" element={<Job />} />
          <Route path="linked-accounts" element={<Linked />} />
          </Route>


        </Route>

        <Route
          path="*"
          element={<h1 style={{fontSize:"24px", fontWeight:"bold" ,display:"flex",justifyContent:"center", alignItems:"center", height:"100vh"}}>
            404 – Page Not Found
            </h1>
            }
        />
      </Routes>
    </Router>
  );
}

export default App;
