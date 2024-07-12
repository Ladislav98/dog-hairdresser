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
        </Route>
      </Routes>
    </>
  );
}

export default App;
