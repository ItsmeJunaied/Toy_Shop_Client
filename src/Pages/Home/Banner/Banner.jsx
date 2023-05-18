import './Banner.css';
import slider1 from '../../../../Images/Action_Hero_Banner1.png'
import slider2 from '../../../../Images/Action_Hero_Banner2.jfif'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full bannerimg">
                <img  src={slider1} className="w-full" alt="Slide 1" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-60 left-80 text-center animate-fade-in">
                    <h2 className=" font-bold text-center text-teal-300 text-7xl animate-fade-in">Premium Toys</h2>
                    <h2 className=" font-bold text-teal-300 text-7xl">Grab Your Action Hero</h2>
                    <p className="text-white mt-5">The Best Toys Are The Ones That Makes You Feel Like They Are Getting The Real Deal</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bannerimg">
                <img src={slider2} className="w-full" alt="Slide 2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-60 left-80 text-center">
                    <h2 className=" font-bold text-center text-teal-300 text-7xl animate-left-to-right">Premium Toys</h2>
                    <h2 className=" font-bold text-teal-300 text-7xl">Grab Your Action Hero</h2>
                    <p className="text-white mt-5">The Best Toys Are The Ones That Makes You Feel Like They Are Getting The Real Deal</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bannerimg">
                <img src={slider1} className="w-full" alt="Slide 3" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-60 left-80 text-center">
                    <h2 className=" font-bold text-center text-teal-300 text-7xl">Premium Toys</h2>
                    <h2 className=" font-bold text-teal-300 text-7xl">Grab Your Action Hero</h2>
                    <p className="text-white mt-5">The Best Toys Are The Ones That Makes You Feel Like They Are Getting The Real Deal</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;