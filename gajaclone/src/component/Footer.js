import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h1>RESOURCES</h1>
                <button className={styles.button1}>Learn More ▷</button>
            </div>
            <div>
                <div>
                    <ul>
                        <li className={styles.video}><button className={styles.button1}>▷</button></li>
                        <li className={styles.video}><iframe width="350" height="250" src="https://www.youtube.com/embed/MjK8_3_uSFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                        <li className={styles.video}><iframe width="350" height="250" src="https://www.youtube.com/embed/-FhP5oOi5bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                        <li className={styles.video}><iframe width="350" height="250" src="https://www.youtube.com/embed/qfOE_of5_rE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className={styles.button2}>
                            <button className={styles.button1}>uber</button>
                        </li>
                        <li className={styles.button2}>
                            <button className={styles.button1}>didi</button>
                        </li>
                        <li className={styles.button2}>
                            <button className={styles.button1}>grab</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}