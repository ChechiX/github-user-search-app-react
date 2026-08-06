import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import {
  SearchBar,
  NotFound,
  ProfileSection,
  Skeleton,
  Header,
} from './components';

import { getUserByUsername } from './api/get-user-by-username';

import { DefaultUser } from './constants/default-user';

export const GitHubUserSearchApp = () => {
  const [username, setUsername] = useState('');
  const normalizedUsername = username.trim();
  const hasUsername = normalizedUsername.length > 0;

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['user', normalizedUsername],
    queryFn: () => getUserByUsername(normalizedUsername),
    enabled: hasUsername,
    retry: false,
  });

  return (
    <main className="flex flex-col gap-8 md:max-w-176 md:m-auto md:gap-10">
      <Header />

      <SearchBar setUsername={setUsername} />

      {!hasUsername ? (
        <ProfileSection user={DefaultUser} />
      ) : isLoading ? (
        <Skeleton />
      ) : isError ? (
        <NotFound />
      ) : (
        <ProfileSection user={user} />
      )}
    </main>
  );
};
