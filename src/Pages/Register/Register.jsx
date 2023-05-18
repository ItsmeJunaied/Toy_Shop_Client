import regimg from '../../../Images/register_image.png'
import './Register.css';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
            <div data-aos="zoom-in-right" className=' w-1/2'>
                    <img src={regimg} className="max-auto vector" />
                </div>
                <div data-aos="zoom-in-left" className='flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100'>
                    <h1 className="text-5xl font-bold mt-20">Register now!</h1>
                    <div className="card ">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                                <div className="divider">OR</div>
                                <div className=' mt-5 flex flex-row'>
                                    <p>Already Have Account?</p>
                                    <Link to="/login" className="link link-info">Sign In</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;