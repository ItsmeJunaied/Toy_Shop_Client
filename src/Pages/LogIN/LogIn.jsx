import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './LogIN.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className='flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100'>
                    <h1 className="text-5xl font-bold mt-20">Login now!</h1>
                    <div className="card ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a className="link link-accent">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;