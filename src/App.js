
import "./App.css"
import AllComp from "./components/composant/AllComp";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SectionOne from "./components/section/SectionOne/SectionOne";
import SectionThree from "./components/section/SectionThree/SectionThree";
import SectionTwo from "./components/section/SectionTwo/SectionTwo";
function App() {
  return <div
  className="body">
    <Navbar/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <AllComp></AllComp>
    <Footer></Footer>
  </div>;
}

export default App;
