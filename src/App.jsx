import CompaniesOverview from "./components/company/CompaniesOverview";
import ControlPanel from "./components/controls/ControlPanel";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ControlPanel />
              <CompaniesOverview />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
