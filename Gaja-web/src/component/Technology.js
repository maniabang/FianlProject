import {useState} from 'react';
import {Link} from 'react-router-dom'
export default function Technology({flag}) {
    const [subT, setSubT] = useState(false);
    const [remain] = useState('remain');
    const [remainNot] = useState('not-remain');
    const [menuRemain] = useState('menu-remain')
    return ( 
        <div className={flag ? remain : remainNot} 
        onMouseOver={() => {setSubT(true);}} onMouseOut={() => {setSubT(false);}}>
            <h4 className={menuRemain}>TECHNOLOGY</h4>
            <h4 className={subT ? remain : remainNot}><Link to="/technology/react">React</Link></h4>
            <h4 className={subT ? remain : remainNot}><Link to="/technology/google">Google Api</Link></h4>
            <h4 className={subT ? remain : remainNot}><Link to="/technology/json-server">Firebase</Link></h4>
            <h4 className={subT ? remain : remainNot}><Link to="/technology/nodejs">Node js</Link></h4>
            <h4 className={subT ? remain : remainNot}><Link to="/technology/redux">Redux</Link></h4>
        </div>
    );
}
