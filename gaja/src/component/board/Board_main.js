import React from "react";
import { Link } from "react-router-dom";
import './Board.css';
import '../Main.css';

export default function Board_main() {
    return (
        <div className="main-main5">
            <div className="board">
                <h1>Driver Review</h1>
                <div className='form-wrapper'>
<<<<<<< HEAD
                    <input className="title-input" type='text' placeholder='Driver Name'/>
                    <input className="title-input" type='text' placeholder='Title'/>
                    <textarea className="text-area" placeholder='Content' />
                </div>
                <button className="btn_submit"><Link to="/board_submit" className="link2">SUBMIT</Link></button>
=======
                    <input className="title-input" type='text' placeholder='Driver Id'/>
                    <input className="title-input" type='text' placeholder='Title'/>
                    <textarea className="text-area" placeholder='Content' />
                </div>
                <button className="submit-button"><Link to="/board_submit" className="link2">SUBMIT</Link></button>
>>>>>>> 50ea356d5bdcfff84355c46e450cc57c1720b30b
            </div>
        </div>
    );
}