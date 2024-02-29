import { useNavigate } from "react-router-dom";
import bookmarkBlueIcon from "/icons/bookmark_blue.svg";
import bookmarkfilled from "/icons/bookmark_filled.svg";
import { useContext } from "react";
import { DataContext } from "../provider/DataContext";
import { addItemToArray, deleteItemInArray, isItemInArray } from "../../utils/arrayHelpers.js";

const CompanyCard = ({ company }) => {
  const { favorites, setFavorites } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();

    // Check if item is in array and than add or remove it
    if (isItemInArray(favorites, company)) {
      const updatedArray = deleteItemInArray(favorites, company);
      setFavorites(updatedArray);
    } else {
      const updatedArray = addItemToArray(favorites, company);
      setFavorites(updatedArray);
    }
  };

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
      <img
        src={favorites.some((item) => item.id === company.id) ? bookmarkfilled : bookmarkBlueIcon}
        alt="bookmark icon"
        width="25px"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default CompanyCard;
