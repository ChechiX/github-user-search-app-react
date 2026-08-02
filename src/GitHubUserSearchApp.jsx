import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { SearchBar, NotFound, ProfileSection } from './components';

import moonIcon from './assets/icons/icon-moon.svg';

import { getUserByUsername } from './api/get-user-by-username';

const DefaultUser = {
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
};

export const GitHubUserSearchApp = () => {
  const [username, setUsername] = useState('');
  const normalizedUsername = username.trim();
  const hasUsername = normalizedUsername.length > 0;

  const {
    data: user,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['user', normalizedUsername],
    queryFn: () => getUserByUsername(normalizedUsername),
    enabled: hasUsername,
    retry: false,
  });

  return (
    <main className="flex flex-col gap-8 md:max-w-176 md:m-auto">
      <header className="flex justify-between">
        <h1 className="text-preset-1">devfinder</h1>

        <button className="uppercase text-[#4B6A9B] text-preset-8 flex gap-3 items-center">
          Dark <img className="w-5 h-5" src={moonIcon} alt="Theme icon" />
        </button>
      </header>

      <SearchBar setUsername={setUsername} />

      {!hasUsername ? (
        <ProfileSection user={DefaultUser} />
      ) : isFetching ? null : isError ? (
        <NotFound />
      ) : (
        <ProfileSection user={user} />
      )}
    </main>
  );
};
