import "./App.css";
import Cards from "./pages/Cards.jsx";
import PrimarySearchAppBar from "./pages/Header.jsx";
import SwipeableTextMobileStepper from "./pages/Hero.jsx";
import CreditCardBanner from "./components/Banner.jsx";
import Reviews from "./components/Brands.jsx";
import DividerStack from "./components/Slider.jsx";
import OutlinedCard from "./components/Exclusive.jsx";
import Explore from "./components/Explore.jsx";
import Explores from "./components/Explorelap.jsx";
import BetterPocket from "./components/BetterPocket.jsx";
import Sellsmart from "./components/Sellsmart.jsx";
import Hotdeals from "./components/Hotdeals.jsx";
import FAQ from "./components/Faq.jsx";
import Articles from "./components/Articles.jsx";
import ArticleList from "./components/Articles2.jsx";
import Review from "./components/Review.jsx";
import DownloadAppBanner from "./components/Appbanner.jsx";
import Para from "./components/Para.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <SwipeableTextMobileStepper />
      <Cards />
      <CreditCardBanner />
      <OutlinedCard />
      <Reviews />
      <DividerStack />
      <Explore />
      <Explores />
      <BetterPocket />
      <Sellsmart />
      <Hotdeals />
      <FAQ />
      <Articles />
      <ArticleList />
      <Review />
      <DownloadAppBanner />
      <Para />
      <Footer />
    </>
  );
}

export default App;
