import React from "react";
import styles from "./Footer.module.css";
import img from "./../img/car1.png";

export default function Options() {

    return (
        <div className={styles.footer}>
            <div className={styles.option}>
                <h1>OPTIONS</h1>
            </div>
            <div>
                <img src={img} className={styles.car} />
            </div>
        </div>
    );
}

