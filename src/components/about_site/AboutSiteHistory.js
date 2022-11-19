import React from "react";

export default function AboutSiteHistory() {
  return (
    <div id="about_site" className="about-site-container scroll-mt-24 bg-white py-10 px-4 sm:px-6 lg:px-8 xl:py-16">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <h2 >About the Site</h2>
            <p className="mt-2 text-lg leading-8 tracking-tight sm:text-3xl">
              What was the History / Inspiration?
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="lg:max-w-none">
                <p>
                  Road Less Travelled began as a static site when I began
                  learning about web development. It is a fictitious travel
                  website with a geological theme. The content includes
                  potential sites of interest with text and images displayed in
                  different UI formats.
                </p>
                <br />
                <p>
                  As a former geologist, now developer, I had most of the copy
                  text and photos so getting the content or locating more,
                  shouldn't be too difficult, with the emphasis on the planning,
                  design and construction of the website.
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <p>
                  The aim was to learn the fundamentals of front end development
                  by creating the client-facing-side and one day making the
                  project a full stack application where users can search
                  through sites of interest from a database or calling data from
                  an API, and even a procedure to book travel itineraries.
                </p>
                <br />
                <p>
                  This was the only project post-bootcamp that I had invested a
                  significant amount of time into building, iterating on and
                  learning from, and I believe it was this site that landed my
                  first full-time job into web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
