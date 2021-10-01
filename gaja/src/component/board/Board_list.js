import { Link } from "react-router-dom";
import './Board.css';
import '../Slider.css';
import useFetch from "./hooks/useFetch";

export default function Board_list () {

    const driver = useFetch("http://localhost:3001/driver") ;

    return (
        <div className="main-main6">
            <div className="div_div">
                <div>
                    <Link to="/board_review">
                        <button className="btn_create">Create</button>
                    </Link>
                </div>
                <div className="btn_driver_list">
                    Driver LIST       
                </div>
                {driver.map(driver =>(
                    <div key={driver.id} className="div_driver">
                        <Link to ={`/board/${driver.driverName}`}>
                            <button className="btn_driver">{driver.driverName}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

    ;
} 