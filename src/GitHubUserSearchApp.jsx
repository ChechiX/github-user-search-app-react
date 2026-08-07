import { useGitHubSearch } from './hooks';

import {
  SearchBar,
  NotFound,
  ProfileSection,
  Skeleton,
  Header,
} from './components';

export const GitHubUserSearchApp = () => {
  const { user, isError, isLoading, setUsername } = useGitHubSearch();

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
