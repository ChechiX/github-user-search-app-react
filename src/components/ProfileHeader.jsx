export const ProfileHeader = ({ user }) => {
  return (
    <header className="flex gap-5 md:gap-8">
      <img
        className="rounded-full w-17.5 h-17.5 md:w-29.25 md:h-29.25"
        src={user.avatar_url}
        alt="User avatar"
      />

      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-(--neutral-700) dark:text-(--neutral-0) text-preset-1">
            {user.name}
          </h2>

          <h3 className="text-(--blue-500) dark:text-(--blue-300) text-preset-4">
            @{user.login}
          </h3>
        </div>

        <time className="text-(--neutral-500) text-preset-6 dark:text-(--neutral-0)">
          Joined 25 Jan 2011
        </time>
      </div>
    </header>
  );
};
