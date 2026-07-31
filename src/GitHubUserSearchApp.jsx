import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { SearchBar } from './components/SearchBar';
import { NotFound } from './components/NotFound';

import companyIcon from './assets/icons/icon-company.svg';
import locationIcon from './assets/icons/icon-location.svg';
import twitterIcon from './assets/icons/icon-twitter.svg';
import websiteIcon from './assets/icons/icon-website.svg';
import moonIcon from './assets/icons/icon-moon.svg';

import { getUserByUsername } from './api/get-user-by-username';

export const GitHubUserSearchApp = () => {
  const [username, setUsername] = useState('');

  const {
    data: user,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['user', username],
    queryFn: () => getUserByUsername(username),
    enabled: username.length > 0,
    retry: false,
  });

  if (isError) {
    return <NotFound />;
  }

  return (
    <main className="flex flex-col gap-8">
      <header className="flex justify-between">
        <h1 className="text-preset-1">devfinder</h1>

        <button className="uppercase text-[#4B6A9B] text-preset-8 flex gap-3 items-center">
          Dark <img className="w-5 h-5" src={moonIcon} alt="Theme icon" />
        </button>
      </header>

      <SearchBar username={username} setUsername={setUsername} />

      <section className="bg-white shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] rounded-[15px] py-8 px-6 flex flex-col gap-6">
        <header className="flex gap-5">
          <img
            className={`rounded-full w-17.5 h-17.5 ${isFetching ? 'animate-pulse bg-red-950 opacity-0' : ''}`}
            src={user?.avatar_url ?? './src/assets/octocat.png'}
            alt="User avatar"
          />

          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-(--neutral-700) text-preset-1">
                {user?.name ?? 'The Octocat'}
              </h2>

              <h3 className="text-[#0079FF] text-preset-4">
                @{user?.login ?? 'octocat'}
              </h3>
            </div>

            <time className="text-[#4B6A9B] text-preset-6">
              Joined 25 Jan 2011
            </time>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <p className="text-[#4B6A9B] text-preset-6">
            {user?.bio ?? 'This profile has no bio'}
          </p>

          <ul className="bg-[#F6F8FF] py-4 px-5 rounded-[10px] flex flex-col gap-4">
            <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
              Repos
              <span className="text-preset-2 text-(--neutral-700)">
                {user?.public_repos ?? 8}
              </span>
            </li>

            <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
              Followers
              <span className="text-preset-2 text-(--neutral-700)">
                {user?.followers ?? 3938}
              </span>
            </li>

            <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
              Following
              <span className="text-preset-2 text-(--neutral-700)">
                {user?.following ?? 9}
              </span>
            </li>
          </ul>

          <ul className="grid gap-4">
            <li className="flex gap-4">
              <img src={locationIcon} alt="Location icon" />

              <p className="text-(--neutral-500) text-preset-6">
                {user?.location ?? 'San Francisco'}
              </p>
            </li>

            <li className="flex gap-4">
              <img src={twitterIcon} alt="Twitter icon" />

              <p className="text-(--neutral-500) text-preset-6">
                {user?.twitter_username ?? 'Not Available'}
              </p>
            </li>

            <li className="flex gap-4">
              <img src={websiteIcon} alt="Website icon" />

              <a
                className="text-(--neutral-500) text-preset-6"
                href={user?.blog ?? 'https://github.blog'}
              >
                {user?.blog?.length ? user.blog : 'https://github.blog'}
              </a>
            </li>

            <li className="flex gap-4">
              <img src={companyIcon} alt="Company icon" />

              <p className="text-(--neutral-500) text-preset-6">
                {user?.company ? `@${user.company}` : '@github'}
              </p>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};
