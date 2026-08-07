import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getUserByUsername } from '../api';

export const useGitHubSearch = () => {
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
  return {
    user,
    setUsername,
    isError,
    isLoading,
  };
};
