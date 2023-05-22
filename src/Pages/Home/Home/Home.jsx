import AboutUs from "../AboutUs/AboutUs";
import ActionSlider from "../ActionSLider/ActionSlider";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ReactTab from "../ReactTab/ReactTab";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ActionSlider></ActionSlider>
            <Gallary></Gallary>
            <ReactTab></ReactTab>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;