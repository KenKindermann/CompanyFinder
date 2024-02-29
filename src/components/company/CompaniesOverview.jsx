import { useEffect, useState } from "react";
import { fetchData } from "../../utils/axiosHelpers.js";
import CompanyCard from "./CompanyCard.jsx";

const CompaniesOverview = () => {
  const [companies, setCompanies] = useState([]);

  /* Get companies by loading page */
  useEffect(() => {
    const getCompanies = async () => {
      const companies = await fetchData();
      console.log(companies);
    };
    getCompanies();
  }, []);

  return (
    <section className="custom-section">
      <CompanyCard />
      <div>sdfsdfsd</div>
    </section>
  );
};

export default CompaniesOverview;
