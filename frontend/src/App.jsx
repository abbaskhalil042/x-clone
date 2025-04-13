import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import Sidebar from "./pages/Sidebar/Sidebar";
import Search from "./pages/Search/Search";
function App() {
  return (
    <div data-theme="abyss">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
