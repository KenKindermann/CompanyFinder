import { Button, OptionsButton } from "../controls/Buttons.jsx";
import filterIcon from "/icons/filter.svg";
import sortIcon from "/icons/sort.svg";
import orderIcon from "/icons/order.svg";
import { apiFieldTitles, sizes, order } from "../../utils/formatter.js";
import { useState } from "react";
import Popup from "./Popup.jsx";

const ControlPanel = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="custom-section flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="flex gap-2 mb-2">
        <Button title="Filter" icon={filterIcon} onClick={() => setShowPopup(true)} />
        <OptionsButton title="Sort" icon={sortIcon} options={apiFieldTitles} controlKey={"sort"} />
        <OptionsButton title="Order" icon={orderIcon} options={order} controlKey={"desc"} />
      </div>
      <div className="flex items-center gap-2">
        <p>Results per page</p>
        <OptionsButton options={sizes} controlKey={"size"} />
      </div>
      {showPopup && <Popup title={"Filter"} inputs={apiFieldTitles} setShowPopup={setShowPopup} />}
    </section>
  );
};

export default ControlPanel;
