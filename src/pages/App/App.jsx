import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Homepage from "../HomePage/Homepage";
import FFRobot from "../WorkPage/FFRobot";
import FSProject from "../WorkPage/FSProject";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/website" element={<Homepage />} />
        <Route path="/website/ffrobot" element={<FFRobot />} />
        <Route path="/website/fsproj" element={<FSProject />} />
        <Route path="/*" element={<Navigate replace to="/website" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
