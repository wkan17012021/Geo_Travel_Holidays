import Nav from'./components/navigation/Nav';
import Sidebar from './components/sidebar/Sidebar';
import FlexPanel from'./components/flex_panel/FlexPanel';
import TwoColLayout from './components/2-col-layout/2-col-layout';
import JsonPopTours from './components/card_w_img/JsonPopTours';
import VideoBanner from './components/video_banner/VideoBanner';
import Footer from './components/footer/Footer';
import ScrollTopBtn from './components/buttons/ScrollTopBtn';

function App() {
  return (
    <main id="outer_container" className="App">
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
      <h2>A Selection of our Popular Destinations</h2>
      <JsonPopTours />
      <VideoBanner />
      <ScrollTopBtn />
      <Footer />
    </main>
  );
}

export default App;
