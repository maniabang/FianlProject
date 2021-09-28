
import { Link } from "react-router-dom";
import './Board.css';
import '../Slider.css';
import useFetch from "../hooks/useFetch";

export default function Board_list () {

    const board = useFetch("http://localhost:3001/board") ;

    // const [board, setBoard] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:3001/board')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setBoard(data);
    //     });
    // }, []);
    // 의존성 배열

    return (
        <ul className="list">
            {board.map(board =>(
                <li key={board.driverId}>
                    <Link to ={`/name/${board.driverName}`}>{board.driverName}</Link>
                </li>
            ))}
        </ul>
    );

    ;
} 