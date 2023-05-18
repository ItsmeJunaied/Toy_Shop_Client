import AboutUs from "../AboutUs/AboutUs";
import ActionSlider from "../ActionSLider/ActionSlider";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ActionSlider></ActionSlider>
            <Gallary></Gallary>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;