import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="gallery" element={<h1>Our Work</h1>} />
          <Route path="about" element={<h1>about</h1>} />
          <Route path="faqs" element={<h1>FAQs</h1>} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="login" element={<h1>login</h1>} />
      </Routes>
    </>
  );
}

export default App;
