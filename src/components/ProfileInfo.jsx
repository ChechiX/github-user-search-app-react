import companyIcon from '../assets/icons/icon-company.svg';
import locationIcon from '../assets/icons/icon-location.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';
import websiteIcon from '../assets/icons/icon-website.svg';

export const ProfileInfo = ({ user }) => {
  return (
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
  );
};
