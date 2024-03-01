// Icons
import backwardsIcon from "/icons/backwards.svg";

// Context
import { DataContext } from "../provider/DataContext";

// Hooks
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Components
import CompaniesOverview from "../components/company/CompaniesOverview";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(DataContext);

  return (
    <section className="custom-section">
      <div className="flex gap-4 items-center px-4 pt-4">
        <img src={backwardsIcon} alt="backwards icon" onClick={() => navigate("/")} className="cursor-pointer" />
        <h1 className="text-custom-blue font-bold text-xl">Favorites</h1>
      </div>
      <CompaniesOverview companyData={favorites} />
    </section>
  );
};

export default Favorites;
