export const ProfileHeader = ({ user }) => {
  return (
    <header className="flex gap-5">
      <img
        className="rounded-full w-17.5 h-17.5"
        src={user?.avatar_url}
        alt="User avatar"
      />

      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-(--neutral-700) text-preset-1">{user?.name}</h2>

          <h3 className="text-[#0079FF] text-preset-4">@{user?.login}</h3>
        </div>

        <time className="text-[#4B6A9B] text-preset-6">Joined 25 Jan 2011</time>
      </div>
    </header>
  );
};
