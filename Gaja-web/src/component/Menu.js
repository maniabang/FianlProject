import '../css/Menu.css'
import About from './About';
import Services from './Services';
import Technology from './Technology';
import Mainmenu from './Mainmenu';
import {useState} from 'react';
export default function Menu({flag, setMenu}) {
    const [bgFalse] = useState('menu-bg-false');
    const [bgTrue] = useState('menu-bg-true');
    const [view] = useState(true);
    return (
        <div className={flag ? bgFalse : view ? null : bgTrue}>
            <Mainmenu flag={flag} setMenu={setMenu} />
            <About flag={flag} />
            <Services flag={flag} />
            <Technology flag={flag} />  
        </div>
    );
}