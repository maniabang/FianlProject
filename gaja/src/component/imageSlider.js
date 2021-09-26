import { Link } from "react-router-dom";
import img1 from "../img/car1.png";
import img2 from "../img/car2.png";
import img3 from "../img/car3.png";
import img4 from "../img/car4.png";
import './Slider.css';

export default [
  {

    title: <Link to="/taxi" className="link">TAXI</Link>,
    description: "WHENEVER, WHEREVER, RIDE",
    urls: img1,
  },

  {
    title: <Link to="/black" className="link">BLACK</Link>,
    description: "LUXURY, RIDE",
    urls: img2,
  },

  {
    title: <Link to="/green" className="link1">GREEN</Link>,
    description: "FUEL CELL, RIDE",
    urls: img3,
  },

  {
    title: <Link to="/sanding" className="link">SANDING</Link>,
    description: "TO AIRPORT",
    urls: img4,

  },

]; 