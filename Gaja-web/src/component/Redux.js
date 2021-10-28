import '../css/Subpage.css'
import backGround from '../img/redux.jpg';
export default function Aboutus() {
    return (
        <div className="sub-square" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word2">
                        Redux
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2, color:'black' }}>
                        Redux is an open-source JavaScript library for managing<br/> and centralizing application state.<br />
                        It is most commonly used with libraries such as React<br /> or Angular for building user interfaces.<br /> 
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
