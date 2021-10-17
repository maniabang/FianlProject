import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/Header.css';
export default function Header({setTrue}) {
    const home = function() {window.location.href='http://localhost:3000/';};
    return (
        <div className="header-wrapper">
            <div className="logo" onClick={home}>GAJA</div>
            <div className="menu" onClick={setTrue}><Link to="/"><img style={{width:26, height:26}} src="https://website.didiglobal.com/dist/media/menu1.423191ca.svg"/></Link></div>
        </div>
    )
}