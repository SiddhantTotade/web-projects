import Layout from "./components/pages/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginRegister from "./components/pages/auth/LoginRegister";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login-register" element={<LoginRegister />} />
            <Route path="reset-password-email" element={<SendPasswordResetEmail />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/home" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404. Page not found.</h1>} />
        </Routes >
      </Router>
    </>
  );
}

export default App;
