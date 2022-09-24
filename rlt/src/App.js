import Nav from'./components/navigation/Nav';
import FlexPanel from'./components/flex_panel/FlexPanel';
import Tabs from'./components/2-col-layout/intro/Tabs';
import AdviceGen from'./components/2-col-layout/advice_gen/advice_gen';
import TwoColLayout from './components/2-col-layout/2-col-layout';
import ImgCard from './components/card_w_img/cardWithImg';

function App() {
  return (
    <div className="App">
      <Nav />
      <FlexPanel />
      {/* <p>Large hero section with flex img gallery with clickable links or mixkit video background w/ overlay intro welcome text or parallax image</p> */}
      
      <TwoColLayout />
      <ImgCard />
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
