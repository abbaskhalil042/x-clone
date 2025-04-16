import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import Layout from "./pages/Layout";
// import Layout from "./Layout"; // Adjust the path if needed

function App() {
  return (
    <div data-theme="abyss">
      <Routes>
        {/* Public pages without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Pages inside layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* You can add more routes here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
