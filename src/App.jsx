import CompaniesOverview from "./components/company/CompaniesOverview";
import ControlPanel from "./components/controls/ControlPanel";
import Navbar from "./components/navigation/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ControlPanel />
      <CompaniesOverview />
    </>
  );
};

export default App;
