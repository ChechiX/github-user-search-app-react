import { useState } from 'react';

import searchIcon from '../assets/icons/icon-search.svg';

export const SearchBar = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setUsername(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] md:shadow-none bg-(--neutral-0) py-2 px-3 rounded-2xl md:pl-6 dark:bg-(--neutral-800)"
    >
      <div className="flex items-center gap-2 w-full">
        <img className="block w-5 h-5" src={searchIcon} alt="Search icon" />

        <input
          name="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full focus:outline-none placeholder:text-(--neutral-500) placeholder:text-[0.8125rem]"
          type="search"
          placeholder="Search GitHub username..."
          autoComplete="on"
        ></input>
      </div>

      <button
        type="submit"
        className="bg-[#0079FF] py-3 px-5 rounded-2xl text-white text-preset-5 cursor-pointer hover:bg-(--blue-300)"
      >
        Search
      </button>
    </form>
  );
};
