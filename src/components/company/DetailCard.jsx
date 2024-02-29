const DetailCard = ({ type, details }) => {
  const keys = {
    Adress: [["street_number", "street"], ["postcode", "city", "state"], "country"],
    Information: ["company", "stock_sector", "stock_industry"],
    Contact: [
      ["contact_first_name", "contact_last_name"],
      "contact_job_title",
      "contact_phone_number",
      "contact_email",
    ],
    Bank: ["bank_iban"],
  };

  const individualKeys = keys[type];
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 relative">
      {/* Company name*/}
      <h2 className="text-custom-blue font-semibold mb-2 mr-4 truncate text-sm sm:text-base">{type}</h2>

      {/* Company details*/}
      <ul className="text-sm truncate">
        {individualKeys.map((keyGroup, index) => (
          <li key={index}>
            {Array.isArray(keyGroup) ? keyGroup.map((key) => details[key]).join(" ") : details[keyGroup]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailCard;
