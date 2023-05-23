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
import ing10 from '../../../../Images/Gallary10.jfif';
import ing11 from '../../../../Images/Gallary11.jfif';
import ing12 from '../../../../Images/Gallary12.png';
const Gallary = () => {
    return (
        <div className=' mt-28'>
            <div  className="given-section mb-16">
                <h1>
                    <span className="word">Hero<span className="superscript">s</span> </span>
                    <span className="word">Gallery</span>
                </h1>
            </div>

            <div >
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet" />

                <div className="gallery">
                    <div className="gallery__column">
                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img  data-aos="flip-left"  src={ing1} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@oladimeg" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img  data-aos="flip-left"  src={ing2} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@a2eorigins" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img  data-aos="flip-left"  src={ing3} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>
                        <a href="https://unsplash.com/@dimadallacqua" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img  data-aos="flip-left"  src={ing12} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column">
                        <a href="https://unsplash.com/@noahbuscher" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-right" src={ing4} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@von_co" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-right" src={ing5} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@samburriss" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-right" src={ing6} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column">
                        <a href="https://unsplash.com/@marilezhava" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-left" src={ing7} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@ethanhaddox" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-left" src={ing8} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@mr_geshani" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-left" src={ing9} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column">
                        <a href="https://unsplash.com/@frxgui" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img  data-aos="flip-right" src={ing10} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@majestical_jasmin" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                                <img data-aos="flip-right" src={ing11} alt="Action Heros" className="gallery__image" />
                                <figcaption className="gallery__caption">Action Heros</figcaption>
                            </figure>
                        </a>


                    </div>
                </div>
            </div>
        </div>


    );
};

export default Gallary;