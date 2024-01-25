import About from "../components/About";
import Banner from "../components/Banner";
import HowItWorksSection from "../components/HowItWorksSection";
import NavBar from "../components/NavBar";
import Testimonial from "../components/Testimonials";
import TopSection from "../components/TopSection";
import Brands from "../components/Brands";
import Services from "../components/Services";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

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
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default HomePage;