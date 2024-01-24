import About from "../components/About";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import TopSection from "../components/TopSection";

const HomePage = () => {
    return (
        <div>
            <TopSection/>
            <NavBar/>
            <Banner/>
            <About/>
        </div>
    )
}

export default HomePage;