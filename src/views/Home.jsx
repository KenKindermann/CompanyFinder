// Context
import { ControlContext } from "../provider/ControlContext";

// Hooks
import { useContext, useEffect, useState } from "react";

// Components
import CompaniesOverview from "../components/company/CompaniesOverview";
import ControlPanel from "../components/controls/ControlPanel";

// Libraries
import useAxios from "../hooks/useAxios";

const Home = () => {
  const [companyData, setCompanyData] = useState(null);
  const { control, query } = useContext(ControlContext);
  const fetchData = useAxios();

  // Fetch data when query changes
  useEffect(() => {
    if (control && query) {
      fetchData(setCompanyData);
    }
  }, [query]);

  return (
    <main>
      <ControlPanel />
      <CompaniesOverview companyData={companyData} />
    </main>
  );
};

export default Home;
