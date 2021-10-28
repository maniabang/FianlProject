import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/gajalogo.svg';
import '../css/Header.css';
export default function Header({setTrue}) {
    const home = function() {window.location.href='http://localhost:3000/';};
    return (
        <div className="header-wrapper">
            <div 
                onClick={home}
                className="logo"
                style={{marginTop:'2%',marginLeft:'1%', width:'10%', height:'10%'}} 
            >
                <img
                    style={{marginTop:'20%',marginLeft:'20%', width:'100%', height:'100%'}}  
                    src={logo} />
            </div>
            <div className="menu" onClick={setTrue}>
                <Link to="/">
                    <img style={{width:30, height:30}} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"/>
                </Link>
            </div>
        </div>
    )
}