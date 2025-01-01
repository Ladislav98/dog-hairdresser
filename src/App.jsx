import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Appointment from "./pages/Appointment/Appointment";
import Account from "./pages/Account/Account";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import { AdminRoute } from "./components/AdminRoute/AdminRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
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
            <Route path="appointment" element={<Appointment />} />
            <Route path="faqs" element={<h1>FAQs</h1>} />
            <Route path="account" element={<Account />} />
          </Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route element={<AppLayout />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
