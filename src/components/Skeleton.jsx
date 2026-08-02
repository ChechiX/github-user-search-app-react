import locationIcon from '../assets/icons/icon-location.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';
import websiteIcon from '../assets/icons/icon-website.svg';
import companyIcon from '../assets/icons/icon-company.svg';

export const Skeleton = () => {
  return (
    <div className="bg-white shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] rounded-[15px] py-8 px-6 flex flex-col gap-6">
      <div className="flex gap-5">
        <div className="rounded-full w-17.5 h-17.5 animate-pulse bg-gray-200" />

        <div className="flex flex-col gap-1 w-51.25">
          <div className="flex flex-col gap-0.5">
            <div className="w-full h-[31.2px] animate-pulse bg-gray-200"></div>

            <div className="w-full h-6 animate-pulse bg-gray-200"></div>
          </div>

          <div className="w-full h-[22.5px] animate-pulse bg-gray-200"></div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-73.75">
        <div className="w-full h-[22.5px] animate-pulse bg-gray-200"></div>

        <div className="bg-[#F6F8FF] py-4 px-5 rounded-[10px] flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
            Repos
            <div className="animate-pulse bg-gray-200 h-[30.8px]"></div>
          </div>

          <div className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
            Followers
            <div className="animate-pulse bg-gray-200 h-[30.8px]"></div>
          </div>

          <div className="flex flex-col gap-1 text-preset-7 text-(--neutral-500)">
            Following
            <div className="animate-pulse bg-gray-200 h-[30.8px]"></div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex gap-4">
            <img src={locationIcon} alt="Location icon" />

            <div className="animate-pulse bg-gray-200 h-[22.5px] w-full"></div>
          </div>

          <div className="flex gap-4">
            <img src={twitterIcon} alt="Twitter icon" />

            <div className="animate-pulse bg-gray-200 h-[22.5px] w-full"></div>
          </div>

          <div className="flex gap-4">
            <img src={websiteIcon} alt="Website icon" />

            <div className="animate-pulse bg-gray-200 h-[22.5px] w-full"></div>
          </div>

          <div className="flex gap-4">
            <img src={companyIcon} alt="Company icon" />

            <div className="animate-pulse bg-gray-200 h-[22.5px] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
