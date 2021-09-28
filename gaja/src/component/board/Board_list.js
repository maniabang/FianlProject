import dummy from "../db/data.json";
import { Link } from "react-router-dom";
import './Board.css';
import '../Slider.css';

export default function Board_list () {

    return (
        <ul className="list">
            {dummy.board.map(board =>(
                <li key={board.driverId}>
                    <Link to ={`/name/${board.driverName}`}>{board.driverName}</Link>
                </li>
            ))}
        </ul>
    );

    ;
} 