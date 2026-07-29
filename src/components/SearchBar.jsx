import searchIcon from '../assets/icon-search.svg';

export const SearchBar = () => {
  return (
    <form className="flex shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] bg-white py-2 px-3 rounded-2xl">
      <div className="flex items-center gap-2 w-full">
        <img className="block w-5 h-5" src={searchIcon} alt="Search icon" />

        <input
          id="searchInput"
          className="w-full focus:outline-none"
          type="search"
          placeholder="Search GitHub username..."
        ></input>
      </div>

      <button className="bg-[#0079FF] py-3 px-5 rounded-2xl text-white">
        Search
      </button>
    </form>
  );
};
