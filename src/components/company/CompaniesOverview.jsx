import { useEffect, useState } from "react";
import { fetchData } from "../../utils/axiosHelpers.js";
import CompanyCard from "./CompanyCard.jsx";

const CompaniesOverview = () => {
  const [companies, setCompanies] = useState(null);

  /* Get companies by loading page */
  useEffect(() => {
    const getCompanies = async () => {
      const companies = await fetchData();
      setCompanies(companies);
    };
    getCompanies();
  }, []);

  return (
    <section className="custom-section grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies && companies.map((company) => <CompanyCard key={company.id} company={company} />)}
    </section>
  );
};

export default CompaniesOverview;
