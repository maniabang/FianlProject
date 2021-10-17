import '../css/Menu.css'
import {useState} from 'react';
export default function Mainmenu({flag, setMenu}) {
    const [closeMenu] = useState('close-button');
    const [view, setView] = useState(true);
    
    return (
        <div className={flag ? closeMenu : null}
            onClick={() => { setMenu(); setView(false); }}>
            {flag ? <img className="close-menu" src="https://website.didiglobal.com/dist/media/close.d48b8198.svg"></img> : null}
        </div>

    );
}