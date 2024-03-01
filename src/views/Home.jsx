import { useContext, useEffect, useState } from "react";
import CompaniesOverview from "../components/company/CompaniesOverview";
import ControlPanel from "../components/controls/ControlPanel";
import { ControlContext } from "../components/provider/ControlContext";
import useAxios from "../components/hooks/useAxios";

const Home = () => {
  const [companyData, setCompanyData] = useState(null);
  const { control, query } = useContext(ControlContext);
  const fetchData = useAxios();

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
