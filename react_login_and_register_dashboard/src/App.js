import Layout from "./components/pages/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginRegister from "./components/pages/auth/LoginRegister";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login-register" element={<LoginRegister />} />
          </Route>
        </Routes >
      </Router>
    </>
  );
}

export default App;
