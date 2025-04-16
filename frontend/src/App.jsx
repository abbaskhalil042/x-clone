import { Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <div data-theme="abyss">
      <Routes>
        {/* Public pages without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/sidebar" element={<SidebarComp />} />
        <Route path="/search" element={<Search />} />

        {/* Pages inside layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* You can add more routes here */}

          <Route path="/profile" element={<Profile />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/profileCard" element={<ProfileCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
