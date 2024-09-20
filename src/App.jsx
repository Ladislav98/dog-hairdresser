import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<h1>Our Work</h1>} />
            <Route
              path="appointment"
              element={<h1>Schedule an appointment</h1>}
            />
            <Route path="faqs" element={<h1>FAQs</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
