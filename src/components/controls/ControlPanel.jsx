// Icons
import filterIcon from "/icons/filter.svg";
import sortIcon from "/icons/sort.svg";
import orderIcon from "/icons/order.svg";

// Hooks
import { useState } from "react";

// Components
import { Button, OptionsButton } from "../controls/Buttons.jsx";
import Popup from "./Popup.jsx";

// Utils
import { apiFieldTitles, sizes, order } from "../../utils/formatter.js";

const ControlPanel = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState(null);

  return (
    <section className="custom-section flex items-center flex-col gap-4 sm:flex-row sm:justify-between ">
      {/* Control buttons */}
      <div className="flex gap-2 mb-2">
        <Button title="Filter" icon={filterIcon} onClick={() => setShowPopup(true)} />
        <OptionsButton title="Sort" icon={sortIcon} options={apiFieldTitles} controlKey={"sort"} />
        <OptionsButton title="Order" icon={orderIcon} options={order} controlKey={"desc"} />
      </div>

      {/* Results per page */}
      <div className="flex items-center gap-2">
        <p>Results per page</p>
        <OptionsButton options={sizes} controlKey={"size"} />
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          title={"Filter"}
          inputs={apiFieldTitles}
          setShowPopup={setShowPopup}
          filter={filter}
          setFilter={setFilter}
        />
      )}
    </section>
  );
};

export default ControlPanel;
