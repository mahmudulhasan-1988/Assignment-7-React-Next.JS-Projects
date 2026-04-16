
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import logo from '../../assets/Images/logo.png'
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
        <nav className="bg-base-100 items-center text-center shadow-sm">
            <div className='mx-auto container items-center text-center px-5 py-3 flex justify-between'>
            <div className="navbar-start">
                <a className="text-xl"><img src={logo} alt="Logo" /> </a>
            </div>

            <div className="navbar-end gap-5">
                <NavLink to={"/"} className={({ isActive }) => isActive ? "btn btn-primary text-white" : "btn"} >
                <IoHomeOutline />Home
                    
                </NavLink>
                <NavLink to="/timeline" className={({ isActive }) => isActive ? "btn btn-primary text-white" : "btn"} >
                    <RiTimeLine />Timeline
                </NavLink>
                <NavLink to="/stats" className={({ isActive }) => isActive ? "btn btn-primary text-white" : "btn"} >
                   <ImStatsDots />Stats
                </NavLink>
            </div>
            </div>
        </nav>
    );
};



export default Navbar;