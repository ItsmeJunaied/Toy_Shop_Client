import './Gallary.css';
import ing1 from '../../../../Images/Gallary1.jfif';
import ing2 from '../../../../Images/Gallary2.jfif';
import ing3 from '../../../../Images/Gallary3.jfif';
import ing4 from '../../../../Images/Gallary4.jfif';
import ing5 from '../../../../Images/Gallary5.jfif';
import ing6 from '../../../../Images/Gallary6.jfif';
import ing7 from '../../../../Images/Gallary7.jfif';
import ing8 from '../../../../Images/Gallary8.jfif';
import ing9 from '../../../../Images/Gallary9.jfif';
const Gallary = () => {
    return (
        <div>
            <h1 className='mt-20'><span className="fancy">Hero Gallary</span></h1>
            <div className="grid image-grid">

                <div className="grid-block">
                    <div data-aos="fade-up-right" className="tile">
                        <img className="tile-img tile-img10" src={ing1} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-left" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing1} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-right" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing2} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-left" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing3} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-right" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing4} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-left" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing5} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-right" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing6} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-left" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing7} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-right" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing8} alt="Image" />
                    </div>
                </div>

                <div data-aos="fade-up-left" className="grid-block">
                    <div className="tile">
                        <img className="tile-img tile-img10" src={ing9} alt="Image" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Gallary;