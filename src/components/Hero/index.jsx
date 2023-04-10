import ContentHero from "./ContentHero/contentHero";
import SearchBar from "./SearchBar/searchBar";
import hero from '../../assets/hero.jpg';
import "./index.css";

const Hero = () => {
    return <div id="hero">
        <img src={hero} alt="hero-img"></img>
        <ContentHero/>
        <SearchBar/>
    </div>
};

export default Hero;