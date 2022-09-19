import Nav from'./components/navigation/Nav';
import FlexPanel from'./components/flex_panel/FlexPanel';
import Tabs from'./components/intro/Tabs';

function App() {
  return (
    <div className="App">
      <Nav />
      <FlexPanel />
      {/* <p>Large hero section with flex img gallery with clickable links or mixkit video background w/ overlay intro welcome text or parallax image</p> */}
      <Tabs>
        <div label="Travel">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel cum dolorum ratione in debitis nam quis. Quia quas, corrupti earum ab sit eos sunt repellendus! Molestias provident harum, distinctio nobis beatae dolor non nam voluptas facilis incidunt, iure omnis vel corporis delectus similique, officiis exercitationem mollitia quae totam placeat.
        </div>
        <div label="Diverse Destinations">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laboriosam consequatur, incidunt, facere porro odit eaque debitis aperiam atque veritatis cumque sapiente quos et autem numquam nulla inventore consequuntur tenetur quaerat! Aliquid unde harum consequuntur tenetur quos deserunt distinctio. Porro quae blanditiis quidem excepturi. Veniam iusto numquam amet blanditiis accusantium.
        </div>
        <div label="Personal Guide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid expedita odio explicabo enim sed nisi ea provident assumenda ipsum iste rem obcaecati molestiae, quod soluta commodi at tempora blanditiis repellendus impedit? Molestiae atque impedit debitis numquam totam labore necessitatibus fuga libero, quo fugit aspernatur exercitationem ad deleniti soluta veritatis?
        </div>
      </Tabs>
      {/* <p>Most Popular Tours with mosaic grid responsive layout</p> */}
      {/* <p>Small bio text explaining the site</p> */}
      {/* <p>full width lazy loading video?</p> */}
      {/* <p>Why travel with RLT? animation (gsap) section?</p> */}
      {/* <p>Discover section: mentions with JFclub, blog style destination reviews teaser on LHS (links to another page of full blog style reviews or redirects to other travel sites), w/ newsletter signup on RHS</p> */}
      {/* <p>Footer: contact links, snapshot gallery, back to top scroll button</p> */}
    </div>
  );
}

export default App;
