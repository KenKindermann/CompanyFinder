import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import CompanyDetailView from "./views/CompanyDetailView";
import Favorites from "./views/Favorites";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyDetailView />} />
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </>
  );
};

export default App;
