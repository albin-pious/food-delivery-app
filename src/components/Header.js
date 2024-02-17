import { useState } from 'react';
import {Link} from 'react-router-dom';
import {LOGO_URL} from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=>{
    const [loginBtn,setloginBtn]=useState('login');
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        Online Status: { onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>Cart</li>
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