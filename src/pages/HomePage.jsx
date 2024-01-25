import About from "../components/About";
import Banner from "../components/Banner";
import HowItWorksSection from "../components/HowItWorksSection";
import NavBar from "../components/NavBar";
import TopSection from "../components/TopSection";
import Brands from "../components/brands";
import Services from "../components/services";
import VideoSection from "../components/videoSection";

const HomePage = () => {
    return (
        <div>
            <TopSection/>
            <NavBar/>
            <Banner/>
            <About/>
            <Services/>
            <Brands/>
            <HowItWorksSection/>
            <VideoSection/>
            
        </div>
    )
}

export default HomePage;