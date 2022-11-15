import Nav from "./components/navigation/Nav";
import Destinations from "./components/headings/Destinations";
import Sidebar from "./components/sidebar/Sidebar";
import FlexPanel from "./components/flex_panel/FlexPanel";
import TwoColLayout from "./components/2-col-layout/2-col-layout";
import JsonPopTours from "./components/card_w_img/JsonPopTours";
import VideoBanner from "./components/video_banner/VideoBanner";
import CanyonTours from "./components/us_tour/Canyon_tours";
import SouthFranceTours from "./components/south_france_tour/South_france_tours";
import BaliTour from "./components/bali_tour/Bali_tour";
import Footer from "./components/footer/Footer";
import ScrollTopBtn from "./components/buttons/ScrollTopBtn";
import AboutSiteHistory from "./components/about_site/AboutSiteHistory";
import AboutSiteChanges from "./components/about_site/AboutSiteChanges";
import AboutSiteImprovements from "./components/about_site/AboutSiteImprovements";

function App() {
  return (
    // <BrowserRouter>
    <main id="outer_container" className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap"></div>
      <Nav />
      <FlexPanel />
      {/* <p>Large hero section with flex img gallery with clickable links or mixkit video background w/ overlay intro welcome text or parallax image</p> */}
      <TwoColLayout />

      {/* <p>Most Popular Tours with mosaic grid responsive layout</p> */}
      {/* <p>Discover section: mentions with JFclub, blog style destination reviews teaser on LHS (links to another page of full blog style reviews or redirects to other travel sites), w/ newsletter signup on RHS</p> */}
      <Destinations redirectLink="destinations" title="A Selection of our Popular Destinations" />
      <JsonPopTours />
      <VideoBanner />
      <CanyonTours />
      <SouthFranceTours />
      <BaliTour />
      <ScrollTopBtn />
      <AboutSiteHistory />
      <AboutSiteChanges />
      <AboutSiteImprovements />
      <Footer />
    </main>
    // </BrowserRouter>
  );
}

export default App;
