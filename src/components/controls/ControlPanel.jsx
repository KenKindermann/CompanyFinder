import { Button, OptionsButton } from "../controls/Buttons.jsx";
import filterIcon from "/icons/filter.svg";
import sortIcon from "/icons/sort.svg";
import orderIcon from "/icons/order.svg";
import { apiFieldTitles, sizes, order } from "../../utils/Formatter.js";

const ControlPanel = () => {
  return (
    <section className="custom-section flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="flex gap-2 mb-2">
        <Button title="Filter" icon={filterIcon} />
        <OptionsButton title="Sort" icon={sortIcon} options={apiFieldTitles} controlKey={"sort"} />
        <OptionsButton title="Order" icon={orderIcon} options={order} controlKey={"desc"} />
      </div>
      <div className="flex items-center gap-2">
        <p>Results per page</p>
        <OptionsButton options={sizes} controlKey={"size"} />
      </div>
    </section>
  );
};

export default ControlPanel;
