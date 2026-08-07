import { useState } from 'react';

import moonIcon from '../assets/icons/icon-moon.svg';
import sunIcon from '../assets/icons/icon-sun.svg';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return (
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <header className="flex justify-between">
      <h1 className="text-preset-1 text-(--neutral-900) dark:text-(--neutral-0)">
        devfinder
      </h1>

      <button
        className={`uppercase ${isDarkMode ? 'text-(--neutral-200)' : 'text-(--neutral-500)'} text-preset-8 flex gap-3 items-center cursor-pointer`}
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <>
            Light <img className="w-5 h-5" src={sunIcon} alt="Theme icon" />
          </>
        ) : (
          <>
            Dark <img className="w-5 h-5" src={moonIcon} alt="Theme icon" />
          </>
        )}
      </button>
    </header>
  );
};
