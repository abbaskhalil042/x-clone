import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";

import Search from "./components/Search";
import Profile from "./pages/Profile/Profile";
import Following from "./pages/Followers/Following";
import Followers from "./pages/Followers/Followers";

import ProfileCard from "./pages/Profile/ProfileCard";
import Layout from "./pages/Layout";
import SidebarComp from "./components/SidebarComp";
import { LoginContext } from "./context/Login";

function App() {
  const { loginToken } = useContext(LoginContext);
  console.log("from app page", loginToken);
  return (
    <div data-theme="abyss">
      <Routes>
        {loginToken ? (
          <>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/sidebar" element={<SidebarComp />} />
              <Route path="/search" element={<Search />} />
              {/* You can add more routes here */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/following" element={<Following />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/profileCard" element={<ProfileCard />} />
            </Route>
          </>
        ) : (
          <>
            {/* Public pages without layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        )}

        <Route
          path="*"
          element={<Navigate to={loginToken ? "/" : "/login"} />}
        />

        {/* Pages inside layout */}
      </Routes>
    </div>
  );
}

export default App;
