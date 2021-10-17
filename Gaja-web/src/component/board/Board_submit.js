import React from "react";
import { Link } from "react-router-dom";
import './Board.css';
import '../Serve.css';

export default function Board_submit() {
    return (
        <div className="main-main5">
            <div className="main-circle">
                <div className="circle-word">
                    <span>
                        Thank You!
                    </span>
                    <span className="circle-word2">
                        For Your Valuable Comments.
                    </span>
                    <br />
                    <span>
                    <Link to="/board_list" className="link2">Go LIST</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}