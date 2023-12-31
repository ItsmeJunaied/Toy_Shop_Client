import { Link } from 'react-router-dom';
import logo from '../../../../Images/ToyHeroes-logo-1.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));

    }
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>

        <li><Link to='/addtoys'>Add Toys</Link></li>
        
        {
            user ?
                <><li><Link to='/mytoys'>My Toys</Link></li>
                    <li><Link to='/login' onClick={handleLogout}>Log Out</Link></li>
                </>
                :
                <li><Link to='/login'>Log In</Link></li>
        }
        {
            user
            &&
            <div className="avatar online">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} title={user.displayName} alt="User avatar" />
                </div>
            </div>

        }

        {
            user ? null : <li><Link to='/register'>Register</Link></li>
        }


    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <img className=' w-20 h-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;