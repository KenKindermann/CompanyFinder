import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import CompanyDetailView from "./views/CompanyDetailView";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyDetailView />} />
      </Routes>
    </>
  );
};

export default App;
