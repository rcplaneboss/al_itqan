import Navbar from "./Navbar";
import Img from "./assets/Img/BG.webp";
import Quran from "./assets/Img/quran1.jpg";
import DescriptionSection from "./DescriptionSection";
import Image from "./Img";
import './App.css'
const Header = () => {
    return (
        <div className="header-box" id="home">
            <img src={Img} className="background-image" alt="bg-image" />
            <div className="over-lay"></div>    
            <DescriptionSection />
        </div>
    );
}

export default Header;
