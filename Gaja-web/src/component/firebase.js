import backGround from '../img/firebase.png';
export default function Joureny() {
    return (
        <div className="sub-sqaure" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        Firebase
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2, color:'black'}}>                      
                        Firebase is a platform developed by Google <br />
                        for creating mobile and web applications.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
