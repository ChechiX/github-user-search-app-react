import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import {
  SearchBar,
  NotFound,
  ProfileSection,
  Skeleton,
  Header,
} from './components';

import { getUserByUsername } from './api';

export const GitHubUserSearchApp = () => {
  const [username, setUsername] = useState('octocat');
  const normalizedUsername = username.trim();

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['user', normalizedUsername],
    queryFn: () => getUserByUsername(normalizedUsername),
    retry: false,
  });

  return (
    <main className="flex flex-col gap-8 md:max-w-176 md:m-auto md:gap-10">
      <Header />

      <SearchBar setUsername={setUsername} />

      {isLoading ? (
        <Skeleton />
      ) : isError ? (
        <NotFound />
      ) : (
        <ProfileSection user={user} />
      )}
    </main>
  );
};
