import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
const Header = ()=>{
    const [loginBtn,setloginBtn]=useState('login');

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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