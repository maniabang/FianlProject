import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div>
            <br />
            <h1>PROMOTION</h1>
            <br />
            <div className={styles.video}>
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