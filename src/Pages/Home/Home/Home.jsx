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
                <section >
                <AboutUs></AboutUs>
                </section>
        </div>
    );
};

export default Home;