import { useContext } from "react";
import CompanyCard from "./CompanyCard.jsx";
import { DataContext } from "../provider/DataContext";

const CompaniesOverview = () => {
  const { companyData } = useContext(DataContext);

  return (
    <section className="custom-section grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {companyData && companyData.map((company) => <CompanyCard key={company.id} company={company} />)}
    </section>
  );
};

export default CompaniesOverview;
