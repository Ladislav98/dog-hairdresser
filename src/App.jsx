import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>about</h1>} />
          <Route path="services" element={<h1>services</h1>} />
          <Route path="appointment" element={<h1>appointment</h1>} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="login" element={<h1>login</h1>} />
      </Routes>
    </>
  );
}

export default App;
