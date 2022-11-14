import React from "react";

const AboutSite = () => {
  return (
    <section className="about_site_container scroll-mt-40" id="about_site">
      <h2>About the Site</h2>
      <div className="about_site_content">
        <h3>What is the History / Inspiration?</h3>
        <p>
          Road Less Travelled began as a static site when I began learning about
          web development. It is a fictitious travel website with a geological
          theme. The content includes potential sites of interest with text and
          images displayed in different UI formats.
        </p>
        <p>
          As a former geologist turned developer, I had most of the copy text
          and photos so getting the content or locating more, shouldn't be too
          difficult, with the emphasis on the planning, design and construction
          of the website. The aim was to learn the fundamentals of front end
          development by creating the client-facing-side and one day making the
          project a full stack application where users can search through sites
          of interest from a database or calling data from an API, and even a
          procedure to book travel itineraries.
        </p>
        <p>
          This was the only project post-bootcamp that I had invested a
          significant amount of time into building, iterating on and learning
          from, and I believe it was this site that landed my first full-time
          job into web development.
        </p>
        <h3>What has changed?</h3>
        <ul>
          <li>
            The original site was built in Summer to Winter 2021, using just{" "}
            <span className="border-dotted border-2 border-brand-purple">
              HTML and CSS
            </span>{" "}
            and consisted of: landing page, travel sites page, contact us page.
            The project back then had a lot of custom CSS which took too long to
            keep amending as content increased and UI components were placed on
            the same page. The markup was not semantic or accessible and once
            again wasn't manageable as the project grew.{" "}
          </li>
          <li>
            I taught myself how basic static sites can be created and some CSS
            principles of styling: normal flow, box modal, specificity rules,
            inheritance, selectors, responsive layout systems.
          </li>
        </ul>
        <ul>
          <li>
            From Summer to Winter 2022, I reconfigured most of the content from
            the original site this time using{" "}
            <span className="border-dotted border-2 border-brand-purple">
              create-react-app
            </span>
            . I chose React because I identified it early on as a marketable
            skillset that employers were seeking for. I was interested to learn
            a technology outside my workpalce at the time.
          </li>
          <li>
            {" "}
            I started learning about React.js through online platforms like
            CodeCademy and Scrimba, but I was still confused despite going
            through the basic syntax and setup multiple times. I felt that I
            would never reach a level of understanding where the development
            experience would be smooth and productivity would flow uninhibited
            by researching and re-reading some of the fundamentals like when to
            use props and state management. It still doesn't come naturally when
            I worked through each component for this site. What helped was
            repetition to build muscle memory when I setup each module rewriting
            the syntax each time.
          </li>
          <li>
            {" "}
            Initially, I learned to build UI components with classes. It became
            apparent after research that classes were outdated and that function
            components were preferred for passing down props and managing state.
            Small, generic components make it easier to reuse elsewhere and you
            can alter the output with props. Before, I was custom coding
            everything so if I needed to make a change on one page, I would
            waste time checking through other pages to maintain consistency.
          </li>
          <li>
            {" "}
            I found that I was producing a lot of card components so I
            researched ways to manage the data efficiently. One way was to
            compile the raw data into a json file or a variable of object data
            type and use a high order function to return markup of consistent
            style as opposed to hard coding everthing. This means if I want to
            change some of an items details, I only have to go to the source
            data to make changes rather than revising the markup whenever data
            was injected into it.
          </li>
          <li>
            {" "}
            I didn't want to reinvent the wheel for most UI, like the tabs
            feature, or scroll-to-top button. Instead of spending time on how to
            implement this commonly used feature, I learned to import components
            from the React library and inject my own content. It just required
            some time researching a use case and seeing if it fit my problem.
            This enabled me to move on to other features that I felt was worth
            spending more time curating.
          </li>
          <li>
            The layout of the first grid structure for the US tours section and
            the grid layout for the following tours are certainly different- and
            you can probably guess which one was custom and which one is from a
            UI library. I practiced using grid layout out of interest and the
            process was very much trial and error. I didn't want to spend the
            same if not more time on the following components so I sought out
            professional designs with the{" "}
            <a
              className="underline underline-offset-4 decoration-brand-purple decoration-2"
              href="https://tailwindui.com/components"
              target="_blank"
            >
              Tailwind UI Component Library
            </a>
            . This means that I had a more user-friendly design with consistent
            and scalable layout. Ultimately, this is what I was attempting to
            achieve.
          </li>
          <li>
            CSS management always seems to be a time consuming process for me. I
            wanted to focus on React so originally I didn't implement a
            preprocessor or utility library like Tailwind. I'm paying for that
            in time loss now as I find I am repeating the same CSS rules where
            they could be combined and refactored. I had a separate stylesheet
            for each component and a global reset stylesheet. Realising this was
            messy, I configured Tailwind for for inline specific styling, in
            keeping with React's mantra about having all information about a
            component specific to that component which included styling. I
            thought about SASS, but as I understand this would be more
            appropriate where you have a large codebase with multiple developers
            working on the project and you all follow the SMACCS/BEM principles.
            As this is a small, solo project, I felt Tailwind utility classes
            would be reasonable to implement.
          </li>
        </ul>
        <h3>What can still be improved?</h3>
        <ul>
          <li>
            It became apparent that create-react-app assumes you want your
            application all on one single page. Originally, the site was a
            landing page with links to other pages with associated, specific
            content based on SSR. I still wanted users to be redirected to other
            pages such as specific tours by continent or country for example, or
            holidays sorted by a theme. If I want to achieve this, I could place
            the content on the same page with links that scroll to the
            particular section. Alternatively, I would have to learn how{" "}
            <span className="border-dotted border-2 border-brand-purple">
              routing
            </span>{" "}
            is performed in React.
          </li>
          <li>
            I definitely need more practice passing and consuming props between
            components. I still don't have that lightbulb moment when I am
            confronted with a problem and I think: "props would be useful here".
            I'm still thinking how the problem would be resolved in plain JS
            because I've spent more time learning JS fundamentals. Perhaps some
            more sophisticated use cases of props are needed, beyond the basic
            UI component rendering.
          </li>
          <li>
            I need to look into ways to make the website accessible and SEO
            friendly, this will lead me to using{" "}
            <span className="border-dotted border-2 border-brand-purple">
              Next.js
            </span>{" "}
            most likely. It seems like a never ending list of tools and
            technologies to learn!
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSite;
