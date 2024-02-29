import { useContext, useEffect } from "react";
import CompaniesOverview from "../components/company/CompaniesOverview";
import ControlPanel from "../components/controls/ControlPanel";
import { ControlContext } from "../components/provider/ControlContext";

const Home = () => {
  const { control, setControl } = useContext(ControlContext);

  useEffect(() => {
    setControl({ ...control });
  }, []);

  return (
    <main>
      <ControlPanel />
      <CompaniesOverview />
    </main>
  );
};

export default Home;
