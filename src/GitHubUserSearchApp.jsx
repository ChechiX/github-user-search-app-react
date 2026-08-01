import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { SearchBar, NotFound, ProfileSection } from './components';

import moonIcon from './assets/icons/icon-moon.svg';

import { getUserByUsername } from './api/get-user-by-username';

export const GitHubUserSearchApp = () => {
  const [username, setUsername] = useState('');

  const {
    data: user,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['user', username],
    queryFn: () => getUserByUsername(username),
    enabled: username.length > 0,
    retry: false,
    placeholderData: {
      avatar_url: './src/assets/octocat.png',
      name: 'The Octocat',
      login: 'octocat',
      bio: 'This profile has no bio',
      public_repos: 8,
      followers: 3938,
      following: 9,
      location: 'San Francisco',
      twitter_username: null,
      blog: 'https://github.blog',
      company: '@github',
    },
  });

  return (
    <main className="flex flex-col gap-8">
      <header className="flex justify-between">
        <h1 className="text-preset-1">devfinder</h1>

        <button className="uppercase text-[#4B6A9B] text-preset-8 flex gap-3 items-center">
          Dark <img className="w-5 h-5" src={moonIcon} alt="Theme icon" />
        </button>
      </header>

      <SearchBar setUsername={setUsername} />

      {isError ? (
        <NotFound />
      ) : (
        <ProfileSection user={user} isFetching={isFetching} />
      )}
    </main>
  );
};
