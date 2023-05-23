import AboutUs from "../AboutUs/AboutUs";
import ActionSlider from "../ActionSLider/ActionSlider";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;