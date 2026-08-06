import moonIcon from '../assets/icons/icon-moon.svg';

export const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-preset-1 text-(--neutral-900) dark:text-(--neutral-0)">
        devfinder
      </h1>

      <button className="uppercase text-[#4B6A9B] text-preset-8 flex gap-3 items-center cursor-pointer">
        Dark <img className="w-5 h-5" src={moonIcon} alt="Theme icon" />
      </button>
    </header>
  );
};
