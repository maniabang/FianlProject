import styles from "../css/Slider.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsLeanMore(){

    return (
      <>
        <div className="NewsMain">
          <Link to={"/NewsMain"}>NewsMain</Link>
        </div>
        <div className={styles.leftRecent}>
          <ul>
            <li>
              <p>Recent News</p>
            </li>
            <li>
              2021 / 04 / 19 DiDi Autonomous Driving Teams up with Volvo Cars
              for Self-driving Test Fleet
            </li>
            <li>
              2021 / 04 / 01 DiDi Elevates its Diversity Program as Company
              Expands International Footprints
            </li>
            <li>
              2021 / 03 / 29 Didi Chuxing Expands to Cape Town, South Africa
            </li>
          </ul>
        </div>
        <div className={styles.NewsForm}>
          (Beijing, May 17, 2021) – DiDi Autonomous Driving, the self-driving
          technology arm of Didi Chuxing (“DiDi”) and GAC Aion New Energy
          Automobile, a wholly-owned subsidiary of Guangzhou Automobile Group
          (“GAC Group”), reached a strategic partnership agreement on the
          development of fully self-driving new energy vehicles with the goal of
          mass production. Under the new agreement, the two parties will explore
          a joint venture partnership and project cooperation for smart vehicle
          development, bringing together DiDi Autonomous Driving’s hardware and
          software R&D capabilities with GAC Aion’s new energy vehicle
          engineering and manufacturing expertise. The parties will co-develop a
          self-driving new energy car model for large-scale commercial
          application with the aim of entering accelerated mass production,
          through innovating across primary areas such as the drive-by-wire
          system, self-driving sensors and system integration. “DiDi will
          continue to increase investment in R&D in self-driving technology to
          make future transportation safer and more efficient. GAC Group has
          been DiDi’s important partner in our automotive industry ecosystem. We
          are very pleased to explore deep collaboration with GAC Aion to
          jointly develop a truly factory-installed fully self-driving car model
          for mass production,” said Zhang Bo, CTO of DiDi and CEO of DiDi
          Autonomous Driving. “The development of self-driving technology will
          accelerate the full arrival of the shared mobility era. The GAC
          Aion-DiDi partnership on autonomous driving brings two industry
          powerhouses together and will play a leading role in the coming
          mobility transformation, which has great industrial significance and
          broad market prospects,” said Gu Huinan, General Manager of GAC Aion.
        </div>
      </>
    );
}