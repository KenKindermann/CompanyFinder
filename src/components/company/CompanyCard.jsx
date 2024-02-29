import { useNavigate } from "react-router-dom";
import bookmarkBlueIcon from "/icons/bookmark_blue.svg";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/company/${company.id}`)}
      className="w-full bg-white shadow-lg rounded-lg p-4 relative cursor-pointer transition ease-in-out hover:bg-gray-100"
    >
      {/* Company details*/}
      <h2 className="text-custom-blue font-semibold mb-2 mr-4 truncate text-sm sm:text-base">{company.company}</h2>
      <ul className="text-sm truncate">
        <li>
          {company.steet_number} {company.street}
        </li>
        <li>
          {company.postcode} {company.city} {company.state}
        </li>
        <li>{company.country}</li>
      </ul>
      {/* Bookmark */}
      <img src={bookmarkBlueIcon} alt="bookmark icon" width="25px" className="absolute top-2 right-2 cursor-pointer" />
    </div>
  );
};

export default CompanyCard;
