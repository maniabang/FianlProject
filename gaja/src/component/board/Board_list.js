import { Link } from "react-router-dom";
import './Board.css';
import '../Slider.css';
import useFetch from "./hooks/useFetch";

export default function Board_list () {

    const driver = useFetch("http://localhost:3001/driver") ;

    return (
        <div className="main-main5">
            <ul className="list">
                <li>
                    <Link to="/board_review">Create</Link>
                </li>
                {driver.map(driver =>(
                    <li key={driver.id}>
                        <Link to ={`/board/${driver.driverName}`}>{driver.driverName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    ;
} 