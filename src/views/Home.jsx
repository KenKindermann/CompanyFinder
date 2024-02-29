import CompaniesOverview from "../components/company/CompaniesOverview";
import ControlPanel from "../components/controls/ControlPanel";

const Home = () => {
  return (
    <main>
      <ControlPanel />
      <CompaniesOverview />
    </main>
  );
};

export default Home;
