import { ProfileHeader } from './ProfileHeader';
import { ProfileInfo } from './ProfileInfo';

export const ProfileSection = ({ user }) => {
  return (
    <section className="bg-white dark:bg-(--neutral-800) shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] dark:shadow-none rounded-[15px] py-8 px-6 flex flex-col gap-6 md:gap-0 md:p-12 md:pr-6.75">
      <ProfileHeader user={user} />

      <ProfileInfo user={user} />
    </section>
  );
};
