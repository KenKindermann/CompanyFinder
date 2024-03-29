// Icons
import backwardsIcon from "/icons/backwards.svg";
import bookmarkBlueIcon from "/icons/bookmark_blue.svg";
import bookmarkFilled from "/icons/bookmark_filled.svg";

// Hooks
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Context
import { DataContext } from "../provider/DataContext";
// Components
import DetailCard from "../components/company/DetailCard.jsx";
import Spinner from "../components/loading/Spinner";

// Utils
import { fetchData } from "../utils/axiosHelpers.js";
import { isItemInArray, deleteItemInArray, addItemToArray } from "../utils/arrayHelpers.js";

const CompanyDetailView = () => {
  const [companyDetails, setCompanyDetails] = useState(null);
  const { id } = useParams();
  const { favorites, setFavorites } = useContext(DataContext);
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

  const handleClick = () => {
    // Check if item is in array and than add or remove it
    if (isItemInArray(favorites.content, companyDetails)) {
      const updatedArray = deleteItemInArray(favorites.content, companyDetails);
      setFavorites({ ...favorites, content: updatedArray });
    } else {
      const updatedArray = addItemToArray(favorites.content, companyDetails);
      setFavorites({ ...favorites, content: updatedArray });
    }
  };

  // Type of cards
  const cards = ["Adress", "Information", "Contact", "Bank"];

  return !companyDetails ? (
    <Spinner />
  ) : (
    <section className="custom-section">
      {/* Backwards, company name & bookmark */}
      <div className="flex gap-4 items-center mb-4">
        <img src={backwardsIcon} alt="backwards icon" onClick={() => navigate("/")} className="cursor-pointer" />
        <h1 className="text-custom-blue font-bold text-xl">{companyDetails.company}</h1>
        <img
          src={favorites.content.some((item) => item.id === companyDetails.id) ? bookmarkFilled : bookmarkBlueIcon}
          alt="bookmark icon"
          onClick={handleClick}
        />
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
