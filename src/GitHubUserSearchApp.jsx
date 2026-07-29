import companyIcon from './assets/icon-company.svg';
import locationIcon from './assets/icon-location.svg';
import twitterIcon from './assets/icon-twitter.svg';
import websiteIcon from './assets/icon-website.svg';
import { useQuery } from '@tanstack/react-query';

import { SearchBar } from './components/SearchBar';

import { getUserByUsername } from './api/get-user-by-username';

export const GitHubUserSearchApp = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserByUsername('ChechiX'),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col gap-8">
      <header className="flex justify-between">
        <h1>devfinder</h1>

        <button className="uppercase text-[#4B6A9B]">Dark</button>
      </header>

      <SearchBar />

      <section className="bg-white shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] rounded-[15px] py-8 px-6 flex flex-col gap-6">
        <header className="flex gap-5">
          <img
            className="rounded-full w-17.5 h-17.5"
            src={user.avatar_url}
            alt="User avatar"
          />

          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[#2B3442]">{user.name}</h2>

              <h3 className="text-[#0079FF]">@{user.login}</h3>
            </div>

            <time className="text-[#4B6A9B]">Joined 25 Jan 2011</time>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <p className="text-[#4B6A9B]">This profile has no bio</p>

          <ul className="bg-[#F6F8FF] py-4 px-5 rounded-[10px] flex flex-col gap-4">
            <li className="flex flex-col gap-1">
              Repos <strong>8</strong>
            </li>

            <li className="flex flex-col gap-1">
              Followers <strong>3938</strong>
            </li>

            <li className="flex flex-col gap-1">
              Following <strong>9</strong>
            </li>
          </ul>

          <ul className="grid gap-4">
            <li className="flex gap-4">
              <img src={locationIcon} alt="Location icon" />

              <p className="text-[#4B6A9B]">San Francisco</p>
            </li>

            <li className="flex gap-4">
              <img src={twitterIcon} alt="Twitter icon" />

              <p className="text-[#4B6A9B]">Not Available</p>
            </li>

            <li className="flex gap-4">
              <img src={websiteIcon} alt="Website icon" />

              <p className="text-[#4B6A9B]">https://github.blog</p>
            </li>

            <li className="flex gap-4">
              <img src={companyIcon} alt="Company icon" />

              <p className="text-[#4B6A9B]">@github</p>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};
