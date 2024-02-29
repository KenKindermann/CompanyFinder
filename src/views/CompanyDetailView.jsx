import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/axiosHelpers.js";
import DetailCard from "../components/company/DetailCard.jsx";

const CompanyDetailView = () => {
  const [companyDetails, setCompanyDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  const getDetails = async () => {
    const details = await fetchData(id);
    setCompanyDetails(details);
  };

  return !companyDetails ? (
    <p>Loading..</p>
  ) : (
    <section className="custom-section">
      <h1>{companyDetails.company}</h1>
      <div className="grid grid-cols-2 gap-4">
        <DetailCard type="Adress" details={companyDetails} />
        <DetailCard type="Information" details={companyDetails} />
        <DetailCard type="Contact" details={companyDetails} />
        <DetailCard type="Bank" details={companyDetails} />
      </div>
    </section>
  );
};

export default CompanyDetailView;
