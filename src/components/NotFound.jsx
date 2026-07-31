export const NotFound = () => {
  return (
    <section className="bg-(--neutral-0) p-12 grid gap-4 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.1986)] rounded-[15px]">
      <h2 className="text-center text-preset-2 text-(--neutral-700)">
        No results found!
      </h2>

      <p className="text-preset-6 text-(--neutral-300) text-center">
        We couldn’t find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </section>
  );
};
