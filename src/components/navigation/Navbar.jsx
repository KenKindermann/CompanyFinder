import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControlContext } from "../provider/ControlContext.jsx";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { control, setControl } = useContext(ControlContext);
  const navigate = useNavigate();

  // Search company by press enter
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setControl({ ...control, search_company: e.target.value });
    }
  };

  // Navigate to home and reset control by clicking on logo
  const handleClick = () => {
    setControl({ desc: false, page: 1, size: 10, sort: "company" });
    navigate("/");
  };

  return (
    <nav className="bg-custom-blue ">
      <div className="flex justify-between items-center text-white gap-8 h-20 p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <span className={showSearch ? `hidden` : `text-xl font-bold cursor-pointer`} onClick={handleClick}>
          CompanyFinder
        </span>

        {/* Searchbar */}
        <input
          type="search"
          placeholder="Search company..."
          className={`p-2 rounded-lg sm:block text-black outline-custom-blue ${showSearch ? "w-full" : "w-3/4 hidden"}`}
          onKeyDown={(e) => handleKeyDown(e)}
        />

        {/* Search & Bookmark icon */}
        <div className={showSearch ? `hidden` : "flex"}>
          <img
            src="/icons/search.svg"
            alt="search icon"
            onClick={() => setShowSearch(true)}
            className="block sm:hidden"
          />
          <img
            src="/icons/bookmark.svg"
            alt="bookmark icon"
            onClick={() => navigate("/favorites")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
