const Navbar = () => {
  return (
    <nav className="bg-custom-blue p-4 flex justify-between items-center text-white gap-8">
      <span className="text-xl font-bold">CompanyFinder</span>

      {/* Search & Bookmark icon */}
      <div className="flex">
        <img src="/icons/search.svg" alt="search icon" />
        <img src="/icons/bookmark.svg" alt="bookmark icon" />
      </div>
    </nav>
  );
};

export default Navbar;
