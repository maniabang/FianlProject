import {useState} from 'react';
import {Link} from 'react-router-dom'
export default function About({flag}) {
    const [subG, setSubG] = useState(false);
    const [remain] = useState('remain');
    const [remainNot] = useState('not-remain');
    const [menuRemain] = useState('menu-remain')
    return (
        <div className={flag ? remain : remainNot} 
        onMouseOver={() => {setSubG(true);}} onMouseOut={() => {setSubG(false);}}>
            <h4 className={menuRemain}>ABOUT GAJA</h4>
            <h4 className={subG ? remain : remainNot}><Link to="/about-gaja/about-us">About Us</Link></h4>
            <h4 className={subG ? remain : remainNot}><Link to="/about-gaja/responsibility">CSR</Link></h4>
        </div>
    );
}