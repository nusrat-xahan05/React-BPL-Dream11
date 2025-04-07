import { BsCoin } from "react-icons/bs";
import logo from './../../assets/logo.png'
import './Header.css'


const Header = ({coin}) => {
    return (
        <div className='w-full sm:w-[88%] mx-auto mt-12 mb-6 flex justify-between items-center bg-[white]'>
            <div className="logo">
                <a href="#"><img src={logo} alt="Website Logo" /></a>
            </div>
            <div className="menu_items flex flex-col lg:flex-row items-end lg:items-center">
                <div className="hidden md:block">
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">Fixture</a></li>
                    <li className="item"><a href="#">Teams</a></li>
                    <li className="item"><a href="#">Schedules</a></li>
                </div>
                <li className="item mt-0 md:mt-4 lg:mt-0">
                    <button className="flex items-center">
                        {coin} Coin
                        <BsCoin className="ml-2.5 text-xl text-yellow-600" />
                    </button>
                </li>
            </div>
        </div>
    );
};

export default Header;