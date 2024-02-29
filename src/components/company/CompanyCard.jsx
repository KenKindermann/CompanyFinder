import bookmarkBlueIcon from "/icons/bookmark_blue.svg";

const CompanyCard = ({ company }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 relative">
      {/* Company details*/}
      <h2 className="text-custom-blue font-semibold mb-2 text-ellipses overflow-hidden">{company.company}</h2>
      <ul className="text-sm">
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
