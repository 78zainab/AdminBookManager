import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from './pages/HomePage';
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;