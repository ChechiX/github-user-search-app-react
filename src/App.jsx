import companyIcon from './assets/icon-company.svg';
import locationIcon from './assets/icon-location.svg';
import octocat from './assets/octocat.png';
import searchIcon from './assets/icon-search.svg';
import twitterIcon from './assets/icon-twitter.svg';
import websiteIcon from './assets/icon-website.svg';

export const GitHubUserSearchApp = () => {
  return (
    <main className="flex flex-col gap-8">
      <header className="flex justify-between">
        <h1>devfinder</h1>

        <button className="uppercase text-[#4B6A9B]">Dark</button>
      </header>

      <form className="flex shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] bg-white py-2 px-3 rounded-2xl">
        <div className="flex items-center gap-2 w-full">
          <img className="block w-5 h-5" src={searchIcon} alt="Search icon" />

          <input
            id="searchInput"
            className="w-full focus:outline-none"
            type="search"
            placeholder="Search GitHub username..."
          ></input>
        </div>

        <button className="bg-[#0079FF] py-3 px-5 rounded-2xl text-white">
          Search
        </button>
      </form>

      <section className="bg-white shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] rounded-[15px] py-8 px-6 flex flex-col gap-6">
        <header className="flex gap-5">
          <img className="rounded-full" src={octocat} alt="Octocat" />

          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[#2B3442]">The Octocat</h2>

              <h3 className="text-[#0079FF]">@octocat</h3>
            </div>

            <time className="text-[#4B6A9B]">Joined 25 Jan 2011</time>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <p className="text-[#4B6A9B]">This profile has no bio</p>

          <section className="bg-[#F6F8FF] py-4 px-5"></section>

          <section className="grid gap-4">
            <div className="flex gap-4">
              <img src={locationIcon} alt="Location icon" />

              <p className="text-[#4B6A9B]">San Francisco</p>
            </div>

            <div className="flex gap-4">
              <img src={twitterIcon} alt="Twitter icon" />

              <p className="text-[#4B6A9B]">Not Available</p>
            </div>

            <div className="flex gap-4">
              <img src={websiteIcon} alt="Website icon" />

              <p className="text-[#4B6A9B]">https://github.blog</p>
            </div>

            <div className="flex gap-4">
              <img src={companyIcon} alt="Company icon" />

              <p className="text-[#4B6A9B]">@github</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};
