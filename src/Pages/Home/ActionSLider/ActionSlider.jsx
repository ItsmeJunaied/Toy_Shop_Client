import Marquee from "react-fast-marquee";

import logo1 from '../../../../Images/Marvel Logo.png';
import logo2 from '../../../../Images/avengers.png';
import logo3 from '../../../../Images/star wars.png';
import logo4 from '../../../../Images/transformers.png';
import logo5 from '../../../../Images/DC Comics.png';
// import logo6 from '../../../../Images/Power Rangers.png';
import logo7 from '../../../../Images/Teenage Mutant Ninja Turtles.png';
import logo8 from '../../../../Images/Street Fighter.png';
import logo9 from '../../../../Images/Assassins Creed.png';
import logo10 from '../../../../Images/Tomb Raider.png';

import './ActionSLider.css';
const ActionSlider = () => {
    return (
        <div>
            <Marquee className="marquee" direction="left" speed={50}>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo1} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo2} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo3} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo4} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo5} alt="" />
                </div>
                {/* <div className="img_logo">
                    <img className=" w-60 h-40 " src={logo6} alt="" />
                </div> */}
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-5" src={logo7} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-7 ml-5" src={logo8} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-40 mr-7 ml-7" src={logo9} alt="" />
                </div>
                <div className="img_logo">
                    <img className=" w-60 h-32 mr-5" src={logo10} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default ActionSlider;