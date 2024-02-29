import { useContext } from "react";
import CompanyCard from "./CompanyCard.jsx";
import { DataContext } from "../provider/DataContext";
import { ControlContext } from "../provider/ControlContext.jsx";
import chevronLeftIcon from "/icons/chevron_left.svg";
import chevronRightIcon from "/icons/chevron_right.svg";

const CompaniesOverview = () => {
  const { companyData } = useContext(DataContext);
  const { control, setControl } = useContext(ControlContext);

  // Change page within valid range
  const changePage = (value) => {
    const newPage = control.page + value;
    if ((value > 0 && control.page < companyData?.totalElements / control.size) || (value < 0 && control.page > 1)) {
      setControl({ ...control, page: newPage });
    }
  };

  return (
    <section className="custom-section">
      {/* Companies */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {companyData && companyData.content.map((company) => <CompanyCard key={company.id} company={company} />)}
      </div>

      {/* Show pagination when totalElements exists  */}
      {companyData?.totalElements && (
        <div className="flex justify-center items-center my-4">
          <img
            src={chevronLeftIcon}
            alt="chevron left icon"
            className="cursor-pointer"
            onClick={() => changePage(-1)}
          />

          <span>
            Page {control.page} of {companyData?.totalElements / control.size}
          </span>

          <img
            src={chevronRightIcon}
            alt="chevron right icon"
            className="cursor-pointer"
            onClick={() => changePage(1)}
          />
        </div>
      )}
    </section>
  );
};

export default CompaniesOverview;
