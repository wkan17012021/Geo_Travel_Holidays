import Nav from'./components/navigation/Nav';
import Sidebar from './components/sidebar/Sidebar';
import FlexPanel from'./components/flex_panel/FlexPanel';
import TwoColLayout from './components/2-col-layout/2-col-layout';
import JsonBlogs from './components/card_w_img/JsonBlogs';
import Footer from './components/footer/Footer';
import ScrollTopBtn from './components/buttons/ScrollTopBtn';

function App() {
  return (
    <div id="outer_container" className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
      <div id="page-wrap"></div>
      <Nav />
      <FlexPanel />
      {/* <p>Large hero section with flex img gallery with clickable links or mixkit video background w/ overlay intro welcome text or parallax image</p> */}
      <TwoColLayout />

      {/* <p>Most Popular Tours with mosaic grid responsive layout</p> */}
      {/* <p>full width lazy loading video?</p> */}
      {/* <p>Why travel with RLT? animation (gsap) section?</p> */}
      {/* <p>Discover section: mentions with JFclub, blog style destination reviews teaser on LHS (links to another page of full blog style reviews or redirects to other travel sites), w/ newsletter signup on RHS</p> */}
      <JsonBlogs />
      <ScrollTopBtn />
      <Footer />
    </div>
  );
}

export default App;
