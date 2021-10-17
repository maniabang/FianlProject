import backGround from '../img/json.jpg';
export default function Joureny() {
    return (
        <div className="sub-sqaure" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        Json Server
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2 }}>                      
                        Created with 3 for front-end developers <br />
                        who need a quick back-end for prototyping and mocking.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
