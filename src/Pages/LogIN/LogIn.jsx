import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './LogIN.css';
import { Link } from 'react-router-dom';
import logimg from '../../../Images/login_img_2.png';

const LogIn = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div data-aos="zoom-in-right">
                    <img src={logimg} className="max-auto vector" />
                </div>
                <div data-aos="zoom-in-left" className='flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100'>
                    <h1 className="text-5xl font-bold mt-20">Login now!</h1>
                    <div className="card ">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a className="link link-accent">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <div className="divider">OR</div>
                                <div className=' flex justify-center'>
                                    <button className="btn btn-circle btn-secondary  mr-5">
                                        G
                                    </button>
                                    <button className="btn btn-circle">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </div>
                                {/* <div className="divider">OR</div> */}
                                <div className='ml-28 mt-5'>
                                    <p>Register using</p>
                                    <Link to="/register" className="link link-info ml-5">Sign UP</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;