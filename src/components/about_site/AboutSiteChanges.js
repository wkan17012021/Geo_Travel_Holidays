import React from "react";

export default function AboutSiteChanges() {
  return (
    <div  className="about-site-container overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 xl:py-20">
      <div className="mx-auto max-w-max lg:max-w-7xl">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="max-w-prose text-base lg:max-w-none">
            <p className="mt-2 text-lg leading-8 tracking-tight sm:text-3xl">
              What has changed?
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
                  The original site was built in Summer to Winter 2021, using
                  just{" "}
                  <span className="border-dotted border-2 border-brand-purple">
                    HTML and CSS
                  </span>{" "}
                  and consisted of: landing page, travel sites page, contact us
                  page. The project back then had a lot of custom CSS which took
                  too long to keep amending as content increased and UI
                  components were placed on the same page. The markup was not
                  semantic or accessible and once again wasn't manageable as the
                  project grew.{" "}
                </p>
                <br />
                <p>
                  I taught myself how basic static sites can be created and some
                  CSS principles of styling: normal flow, box modal, specificity
                  rules, inheritance, selectors, responsive layout systems.
                </p>
                <br />
                <p>
                  From Summer to Winter 2022, I reconfigured most of the content
                  from the original site this time using{" "}
                  <span className="border-dotted border-2 border-brand-purple">
                    create-react-app
                  </span>
                  . I chose React because I identified it early on as a
                  marketable skillset that employers were seeking for. I was
                  interested to learn a technology outside my workplace at the
                  time.
                </p>
                <br />
                <p>
                  I started learning about React.js through online platforms
                  like CodeCademy and Scrimba, but I was still confused despite
                  going through the basic syntax and setup multiple times. I
                  felt that I would never reach a level of understanding where
                  the development experience would be smooth and productivity
                  would flow uninhibited by researching and re-reading some of
                  the fundamentals like when to use props and state management.
                  It still doesn't come naturally when I worked through each
                  component for this site. What helped was repetition to build
                  muscle memory when I setup each module rewriting the syntax
                  each time.
                </p>
                <br />
                <p>
                  Initially, I learned to build UI components with classes. It
                  became apparent after research that classes were outdated and
                  that function components were preferred for passing down props
                  and managing state. Small, generic components make it easier
                  to reuse elsewhere and you can alter the output with props.
                  Before, I was custom coding everything so if I needed to make
                  a change on one page, I would waste time checking through
                  other pages to maintain consistency.
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <br />
                <p>
                  I found that I was producing a lot of card components so I
                  researched ways to manage the data efficiently. One way was to
                  compile the raw data into a json file or a variable of object
                  data type and use a high order function to return markup of
                  consistent style as opposed to hard coding everthing. This
                  means if I want to change some of an items details, I only
                  have to go to the source data to make changes rather than
                  revising the markup whenever data was injected into it.
                </p>
                <br />
                <p>
                  I didn't want to reinvent the wheel for most UI, like the tabs
                  feature, or scroll-to-top button. Instead of spending time on
                  how to implement this commonly used feature, I learned to
                  import components from the React library and inject my own
                  content. It just required some time researching a use case and
                  seeing if it fit my problem. This enabled me to move on to
                  other features that I felt was worth spending more time
                  curating.
                </p>
                <br />
                <p>
                  The layout of the first grid structure for the US tours
                  section and the grid layout for the following tours are
                  certainly different- and you can probably guess which one was
                  custom and which one is from a UI library. I practiced using
                  grid layout out of interest and the process was very much
                  trial and error. I didn't want to spend the same if not more
                  time on the following components so I sought out professional
                  designs with the{" "}
                  <a
                    className="underline underline-offset-4 decoration-brand-purple decoration-2"
                    href="https://tailwindui.com/components"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tailwind UI Component Library
                  </a>
                  . This means that I had a more user-friendly design with
                  consistent and scalable layout. Ultimately, this is what I was
                  attempting to achieve.
                </p>
                <br />
                <p>
                  CSS management always seems to be a time consuming process for
                  me. I wanted to focus on React so originally I didn't
                  implement a preprocessor or utility library like Tailwind. I
                  had a separate stylesheet for each component which became
                  unruly to manage. I configured Tailwind for inline specific
                  styling, in keeping with React's mantra about having all
                  information about a component specific to that component which
                  included styling. I thought about SASS, but as I understand
                  this would be more appropriate where you have a large codebase
                  with multiple developers working on the project and you all
                  follow a style guide or set of principles. As this is a small,
                  solo project, I felt Tailwind utility classes would be
                  reasonable to implement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
