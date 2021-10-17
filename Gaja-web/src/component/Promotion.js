import React from "react";
import './Slider.css';
import { Link } from "react-router-dom";

export default function Promotion({flag}) {
    return (
        <div className={flag ? 'test' : ''}>
            <br />
            <Link to="/board_list" className="link3"><h1 style={{marginLeft:100}}>BOARD</h1></Link>
            <br />
            <div className="video">
                <div>
                    <iframe width="350" height="250" src="https://www.youtube.com/embed/MjK8_3_uSFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="350" height="250" src="https://www.youtube.com/embed/-FhP5oOi5bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="350" height="250" src="https://www.youtube.com/embed/qfOE_of5_rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    );
}