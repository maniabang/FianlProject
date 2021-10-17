import backGround from '../img/google.jpg';
export default function Aboutus() {
    return (
        <div className="sub-sqaure" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        Google API
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2 }}>
                        Google offers a variety of APIs, mostly web APIs for web developers
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
