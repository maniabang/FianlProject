import backGround from '../img/nodejs.png';
export default function Joureny() {
    return (
        <div className="sub-square" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word2">
                        Node JS
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2, color:'black' }}>                      
                        Node.js is an open-source, cross-platform,<br />
                        back-end JavaScript runtime environment that runs<br /> 
                        on the V8 engine and executes JavaScript code outside a web browser.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
