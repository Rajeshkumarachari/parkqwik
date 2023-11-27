import DownloadPark from "./components/DownloadPark";
import FindPark from "./components/FindPark";
import Footer from "./components/Footer";
import HappyCustomers from "./components/HappyCustomers";
import Home from "./components/Home";
import Mobile from "./components/Mobile";
import Question from "./components/Question";

function App() {
  return (
    <div className=" w-fit">
      <Home />
      <Mobile />
      <FindPark />
      <HappyCustomers />
      <DownloadPark />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
