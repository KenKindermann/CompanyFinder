import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-custom-blue ">
      <div className="flex justify-between items-center text-white gap-8 h-20 p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <span className={showSearch ? `hidden` : `text-xl font-bold`}>CompanyFinder</span>

        {/* Searchbar */}
        <input
          type="text"
          placeholder="Search company..."
          className={`p-2 rounded-lg sm:block ${showSearch ? "w-full" : "w-3/4 hidden"}`}
        />

        {/* Search & Bookmark icon */}
        <div className={showSearch ? `hidden` : "flex"}>
          <img
            src="/icons/search.svg"
            alt="search icon"
            onClick={() => setShowSearch(true)}
            className="block sm:hidden"
          />
          <img src="/icons/bookmark.svg" alt="bookmark icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
