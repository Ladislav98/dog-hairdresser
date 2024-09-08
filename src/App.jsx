import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<h1>Our Work</h1>} />
          <Route
            path="appointment"
            element={<h1>Schedule an appointment</h1>}
          />
          <Route path="faqs" element={<h1>FAQs</h1>} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
