import { useState } from "react";

export default function Board_data( {board}){

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(board.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
    }

    return(
        <tr>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{isShow && board.driverId}</td>
            <td>
                {board.title}
            </td>
            <td>
                {board.content}
            </td>
            <td>
                <button onClick={toggleShow}>DriverId{isShow ? "숨기기" : "보기"}</button>
                <button>Board</button>
                <button>Delete</button>
            </td>
        </tr>
    );
}