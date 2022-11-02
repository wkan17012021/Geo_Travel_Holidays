import React from "react";

const AboutSite = () => {
  return (
    <section className="about_site_container" id="about_site">
      <h2>About the Site</h2>
      <div className="about_site_content">
        <h3>What is the History / Inspiration?</h3>
        <p>
          RLT began as basic, static site when I began learning some of the
          fundamentals of HTML and native CSS. It was a quite crass and clunky,
          not maintainable or scalable. We all remember our first project!
        </p>
        <p>
          Nevertheless, it was the only project post-bootcamp that I had
          invested a significant amount of time into building and I believe it
          was this site that landed me my first job into web development. It was
          only when I explained my thought process in an interview that it was
          apparent that webpages are not constructed like this. I began to
          appreciate that development had many layers of complexity and I should
          follow best practice to save myself time in the future when I
          inevitably come back to improve on the project. I knew just enough to
          patch together a static site (but without depth of knowledge so it was
          a long drawn out experience), many things I knew existed but I didn't
          know about at the time, and what appears to be an insurmountable list
          of things I am not aware of and therfore do not know.
        </p>
        <h3>What has changed?</h3>
        <p>
          I am certainly happy that I was able to recreate most of the content
          from the original site using create-react-app. I chose React because I
          identified it early on as a marketable skillset that employers were
          seeking for. My first company I worked for does not need or use React,
          so it was nice to learn some other technology outside my usual
          workflow. When I started learning about React.js through CodeCademy
          and Scrimba tutorials, I was completely lost despite going through the
          basic syntax and setup multiple times. I felt that I would never reach
          a level of understanding where the development experience would be
          smooth and productivity would flow uninhibited by researching and
          re-reading some of the fundamentals like when to use props and state
          management. To be honest, it still doesn't come naturally when I
          worked through each component for this site. What helped was
          repetition when I setup each module as well as using VS Code's
          keyboard shortcuts like 'sfc' for stateless functional component
          rather than rewriting the syntax each time.
        </p>
        <h3>What did I learn?</h3>
        <ul>
          <li>
            Initially, I learned to build UI components with classes. It became
            apparent after research that class components were outdated and that
            function components were preferred for passing down props and
            managing state. Small, generic components make it easier to reuse
            elsewhere and you can alter the output with props. Before, I was
            custom coding everything so if I needed to make a change on one
            page, I would waste time checking through other pages to maintain
            consistency.
          </li>
          <li>
            I found that I was producing a lot of card components and stumbled
            on a couple of ways to manage the data efficiently. One way was to
            compile the raw data into a json file or a variable of object data
            type and use a high order function to return markup of consistent
            style as opposed to hard coding everthing. This means if I want to
            change some of an items details, I only have to go to the source
            data to make changes rather than revising the markup whenever data
            was injected into it.
          </li>
          <li>
            Some components were beyond my understanding still, like the tabs
            feature. Instead of spending time on how to implement this commonly
            used feature, you can import comopnents like these and use your own
            content to suit. It was more efficient to do this and you should
            take advantage of the React library as much as you can. It just
            required some time researching a use case and example by someone
            else. This enabled me to move on to other features that I felt was
            worth spending more time learning.
          </li>
          <li>
            My creative design skills are not my strong suit: the layout of the
            first grid structure for the US tours section and the grid layout
            for the following tours are certainly different. I practiced using
            grid layout out of interest and the process was very much trial and
            error. I didn't want to spend the same if not more time on the
            following components so I sought out professional designs with the
            Tailwind UI Component Library. Although I still had to translate the
            inline tailwind classes back into native CSS, what I had was a more
            user-friendly design with consistent and scalable layout.
            Ultimately, this is what I was attempting to achieve.
          </li>
          <li></li>
        </ul>
        <h3>What can still be improved?</h3>
        <ul>
          <li>
            It became apparent that CRA assumes you want your application all on
            one single page. Originally, the site was a landing page with links
            to other pages with associated, specific content based on SSR. I
            still wanted users to be redirected to other pages such as specific
            tours by continent or country for example, or holidays sorted by a
            theme. If I want to achieve this, I could place the content on the
            same page with links that scroll to the particular section.
            Alternatively, I would have to learn how routing is performed in
            React.
          </li>
          <li>
            I definitely need more practice passing and consuming props between
            components. I still don't have that lightbulb moment when I am
            confronted with a problem and I think, props would be useful here.
            I'm still thinking how the problem would be resolved in plain JS
            because I've spent more time learning JS fundamentals. Perhaps some
            more sophisticated use cases of props are needed, beyond the basic
            UI component rendering.
          </li>
        </ul>
        <li>
          CSS management always seems to be a time consuming process for me. I
          wanted to focus on React so I didn't implement a preprocessor or
          utility library like Tailwind. I'm paying for that in time loss now as
          I find I am repeating the same CSS rules where they could be combined
          and refactored. I have a separate stylesheet for each component and a
          global reset stylesheet. Going forward, I will implement SASS or
          Tailwind as I need more practice with it and it will help me manage
          the styling as the content and code increases.
        </li>
      </div>
    </section>
  );
};

export default AboutSite;
