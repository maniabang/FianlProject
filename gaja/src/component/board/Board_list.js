<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import './Board.css';

export default function Board_list () {

    const [board, setBoard] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3001/board")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBoard(data);
            });
    }, []);

    function del(){
        if(window.confirm('삭제 하겠습니까?')){
            fetch("http://localhost:3001/board",{
                method:'DELETE',
            });
        }
    }

    return(
        <>
            <table className="table">
                <tbody>
                    {board.map(board => (
                        <tr>
                            <td>
                                {board.driverId}
                            </td>
                            <td>
                                {board.title}
                            </td>
                            <td>
                                {board.content}
                            </td>
                            <td>
                                <button>Update</button>
                                <button onClick={del}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
>>>>>>> 50ea356d5bdcfff84355c46e450cc57c1720b30b
