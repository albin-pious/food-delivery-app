import { useState } from 'react';
import {Link} from 'react-router-dom';
import {LOGO_URL} from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=>{
    const [loginBtn,setloginBtn]=useState('login');
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between shadow">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="flex item-center">
                <ul className="flex p-5 m-4">
                    <li className='px-4'>
                        Online Status: { onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className="Px-4">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <li>
                        <button className='login' onClick={()=>{
                            loginBtn==='login'?setloginBtn('logout')
                            :setloginBtn('login');
                        }}>{loginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;