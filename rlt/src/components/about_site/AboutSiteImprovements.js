import React from "react";

export default function AboutSiteImprovements() {
  return (
    <div className="about-site-container overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-24">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <p className="mt-2 text-lg leading-8 tracking-tight sm:text-3xl">
              What can still be improved?
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
                  It became apparent that create-react-app assumes you want your
                  application all on one single page. Originally, the site was a
                  landing page with links to other pages with associated,
                  specific content based on SSR. I still wanted users to be
                  redirected to other pages such as specific tours by continent
                  or country for example, or holidays sorted by a theme. If I
                  want to achieve this, I could place the content on the same
                  page with links that scroll to the particular section.
                  Alternatively, I would have to learn how{" "}
                  <span className="border-dotted border-2 border-brand-purple">
                    routing
                  </span>{" "}
                  is performed in React.
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <p>
                  I definitely need more practice passing and consuming props
                  between components. I still don't have that lightbulb moment
                  when I am confronted with a problem and I think: "props would
                  be useful here". I'm still thinking how the problem would be
                  resolved in plain JS because I've spent more time learning JS
                  fundamentals. Perhaps some more sophisticated use cases of
                  props are needed, beyond the basic UI component rendering.
                </p>
                <br />
                <p>
                  I need to look into ways to make the website accessible and
                  SEO friendly, this will lead me to using{" "}
                  <span className="border-dotted border-2 border-brand-purple">
                    Next.js
                  </span>{" "}
                  most likely. It seems like a never ending list of tools and
                  technologies to learn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
