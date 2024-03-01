import { useNavigate } from "react-router-dom";
import CompaniesOverview from "../components/company/CompaniesOverview";
import backwardsIcon from "/icons/backwards.svg";
import { useContext, useEffect } from "react";
import { DataContext } from "../components/provider/DataContext";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(DataContext);

  return (
    <section>
      <div className="flex gap-4 items-center px-4 pt-4">
        <img src={backwardsIcon} alt="backwards icon" onClick={() => navigate("/")} className="cursor-pointer" />
        <h1 className="text-custom-blue font-bold text-xl">Favorites</h1>
      </div>
      <CompaniesOverview companyData={favorites} />
    </section>
  );
};

export default Favorites;
