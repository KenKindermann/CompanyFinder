import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../utils/axiosHelpers.js";
import DetailCard from "../components/company/DetailCard.jsx";
import backwardsIcon from "/icons/backwards.svg";
import bookmarkBlueIcon from "/icons/bookmark_blue.svg";

const CompanyDetailView = () => {
  const [companyDetails, setCompanyDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Get details by loading page
  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  // Fetch company details by id
  const getDetails = async () => {
    const details = await fetchData(id);
    setCompanyDetails(details);
  };

  // Type of cards
  const cards = ["Adress", "Information", "Contact", "Bank"];

  return !companyDetails ? (
    <p>Loading..</p>
  ) : (
    <section className="custom-section">
      {/* Backwards, company name & bookmark */}
      <div className="flex gap-4 items-center mb-4">
        <img src={backwardsIcon} alt="backwards icon" onClick={() => navigate("/")} className="cursor-pointer" />
        <h1 className="text-custom-blue font-bold text-xl">{companyDetails.company}</h1>
        <img src={bookmarkBlueIcon} alt="bookmark icon" />
      </div>

      {/* Detail cards*/}
      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <DetailCard key={card} type={card} details={companyDetails} />
        ))}
      </div>
    </section>
  );
};

export default CompanyDetailView;
