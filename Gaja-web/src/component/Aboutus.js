import backGround from '../img/about-us.jpg';
export default function Aboutus() {
    return (
        <div className="sub-square" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        CORPORATE SOCIAL RESPONSIBILITY
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2 }}>
                            GAJA’s Mission Is to Make Traveling Better.<br />
                            It Is Our Inexorable Commitment with<br />
                            Unyielding Social Responsibilities.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
