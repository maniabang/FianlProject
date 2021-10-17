import {useState} from 'react';
import {Link} from 'react-router-dom'
export default function Services ({flag})  {
    const [remain] = useState('remain');
    const [remainNot] = useState('not-remain');
    const [menuRemain] = useState('menu-remain')
    const [subS, setSubS] = useState(false);
    return (
        <div className={flag ? remain : remainNot} 
        onMouseOver={() => {setSubS(true);}} onMouseOut={() => {setSubS(false);}}>
            <h4 className={menuRemain}>SERVICES</h4>
            <h4 className={subS ? remain : remainNot}><Link to="/services/g-taxi">G taxi</Link></h4>
            <h4 className={subS ? remain : remainNot}><Link to="/services/a-irport">A irport</Link></h4>
            <h4 className={subS ? remain : remainNot}><Link to="/services/j-ourney">J ourney</Link></h4>
            <h4 className={subS ? remain : remainNot}><Link to="/services/a-ble">A ble</Link></h4>
        </div>
    )
}
