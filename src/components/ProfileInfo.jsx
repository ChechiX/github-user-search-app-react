import companyIcon from '../assets/icons/icon-company.svg';
import locationIcon from '../assets/icons/icon-location.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';
import websiteIcon from '../assets/icons/icon-website.svg';

export const ProfileInfo = ({ user }) => {
  return (
    <section className="flex flex-col gap-6">
      <p className="text-(--neutral-500) text-preset-6 dark:text-(--neutral-0)">
        {user?.bio}
      </p>

      <ul className="bg-(--neutral-100) dark:bg-(--neutral-900) py-4 px-5 rounded-[10px] grid gap-4 md:grid-cols-3 md:px-8">
        <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500) dark:text-(--neutral-0)">
          Repos
          <span className="text-preset-2 text-(--neutral-700) dark:text-(--neutral-0)">
            {user?.public_repos}
          </span>
        </li>

        <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500) dark:text-(--neutral-0)">
          Followers
          <span className="text-preset-2 text-(--neutral-700) dark:text-(--neutral-0)">
            {user?.followers}
          </span>
        </li>

        <li className="flex flex-col gap-1 text-preset-7 text-(--neutral-500) dark:text-(--neutral-0)">
          Following
          <span className="text-preset-2 text-(--neutral-700) dark:text-(--neutral-0)">
            {user?.following}
          </span>
        </li>
      </ul>

      <ul className="grid gap-4 md:grid-cols-2">
        <li className="flex gap-4">
          <img src={locationIcon} alt="Location icon" />

          <p className="text-(--neutral-500) dark:text-(--neutral-0) text-preset-6">
            {user?.location ?? 'Not Available'}
          </p>
        </li>

        <li className="flex gap-4">
          <img src={twitterIcon} alt="Twitter icon" />

          <p className="text-(--neutral-500) dark:text-(--neutral-0) text-preset-6">
            {user?.twitter_username ?? 'Not Available'}
          </p>
        </li>

        <li className="flex gap-4">
          <img src={websiteIcon} alt="Website icon" />

          <a
            className="text-(--neutral-500) dark:text-(--neutral-0) text-preset-6"
            href={user?.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user?.blog.length ? user.blog : 'Not Available'}
          </a>
        </li>

        <li className="flex gap-4">
          <img src={companyIcon} alt="Company icon" />

          <p className="text-(--neutral-500) dark:text-(--neutral-0) text-preset-6">
            {user?.company ? `${user.company}` : 'Not Available'}
          </p>
        </li>
      </ul>
    </section>
  );
};
