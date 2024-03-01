// Icons
import bookmarkBlueIcon from "/icons/bookmark_blue.svg";
import bookmarkfilled from "/icons/bookmark_filled.svg";

// Context
import { DataContext } from "../../provider/DataContext.jsx";

// Hooks
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Utils
import { addItemToArray, deleteItemInArray, isItemInArray } from "../../utils/arrayHelpers.js";

const CompanyCard = ({ company }) => {
  const { favorites, setFavorites } = useContext(DataContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();

    // Check if item is in array and than add or remove it
    if (isItemInArray(favorites.content, company)) {
      const updatedArray = deleteItemInArray(favorites.content, company);
      setFavorites({ ...favorites, content: updatedArray });
    } else {
      const updatedArray = addItemToArray(favorites.content, company);
      setFavorites({ ...favorites, content: updatedArray });
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
        src={favorites.content.some((item) => item.id === company.id) ? bookmarkfilled : bookmarkBlueIcon}
        alt="bookmark icon"
        width="25px"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default CompanyCard;
