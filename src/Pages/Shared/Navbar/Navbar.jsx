import { Link } from 'react-router-dom';
import logo from '../../../../Images/ToyHeroes-logo-1.png';
const Navbar = () => {
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={'/alltoys'}>All Toys</Link></li>
        <li><Link to={'/mytoys'}>My Toys</Link></li>
        <li><Link to={'/addtoys'}>Add Toys</Link></li>
        <li><Link to={'/login'}>Log In</Link></li>
        {/* {
                    user ? null : <ActiveLInk className='' to='/register'>Register</ActiveLInk>
        } */}
        <li><Link to={'/register'}>Register</Link></li>
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
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;