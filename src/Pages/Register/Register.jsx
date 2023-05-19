import { useContext, useState } from 'react';
import regimg from '../../../Images/register_image.png'
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const [error,setError]=useState('');
    const{createUser}= useContext(AuthContext);
    const handleRegister=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        const name=form.name.value;

        console.log(photo);
        setError('');
        if(password.length<6){
            setError('password Must be 6 characters')
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            updateUserProfile(result.user,name,photo);
            
            
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }

    const updateUserProfile=(user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL: photo
        })
        .then(()=>{
            console.log('updated')
        })
        .catch(()=>{
            setError(error.message)
        })
    }
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
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
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