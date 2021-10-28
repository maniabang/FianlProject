import '../css/Subpage.css'
import backGround from '../img/react.jpg';
export default function ReactPage() {
    return (
        <div className="sub-square" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        React
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2 }}>
                            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
