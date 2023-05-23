import './AboutUs.css';
import logo from '../../../../Images/l1.png';
// import { googleFonts } from 'google-fonts';

import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerHTML
            .split('')
            .map((char, i) => `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`)
            .join('');
    }, []);



    return (
        <div>
            <h1 className='mt-20 mb-32'><span className="fancy">About Us</span></h1>
            <div className='flex' data-aos="fade-up-right">
                <div className="circle ml-40">
                    <div className="logo"></div>
                    <div className="text">
                        <p>Waiting for what! Grab You Action Hero Now. </p>
                    </div>
                </div>
                <div className='ml-60 mt-12' data-aos="fade-up-left">
                    <h2 className=' text-6xl font-bold mb-5 about-title' >WHAT YOU NEED TO KNOW</h2>
                    <p className=' text-zinc-500 text-xl mr-60'>Metus turpis maecenas fusce porta urna metus sit nisl faucibus. Elementum quis purus eleifend purus. Sed velit sagittis justo felis tempus. Facilisis posuere quis mi eget hac euismod. Lorem ipsum dolor sit amet consectetur.</p>
                    <div  className='flex mt-10'>
                        <div className='flex items-center mr-16'>
                            <p className=' text-8xl mr-2 number text-sky-400'>9</p>
                            <p className='text-3xl font-bold'>EXPERIENCE</p>
                        </div>
                        <div className='flex items-center'>
                            <p className=' text-8xl mr-2 number text-sky-400'>15</p>
                            <p className='text-3xl font-bold '>PROFESSIONALS</p>
                        </div>
                    </div>
                    <div className='mt-10 ml-16'>
                        <img src={logo} alt="" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AboutUs;
