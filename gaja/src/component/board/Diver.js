import { useState } from "react";

export default function Driver({board}){
    
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(board.isDone)

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/board?drvierId=${board.driverId}` ,{
            method:'PUT',
            headers: {
                "Content-Type":"applicataion/json",
            },
            body: JSON.stringify({
                ...board,
                isDone: !isDone,
            }),
        }).then(res =>{
           if (res.ok){
               setIsDone(isDone);
           } 
        });
    }

    return(
        <tr className={isDone ? "off" : ""}>
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>

        <td>{board.title}</td>
        <td>{isShow && board.content}</td>
        <td>
            <button onClick={toggleShow} className="btn_submit">
            {isShow ? 'HIDE':'SHOW'}
            </button>
            <button className="btn_del">DELETE</button>
        </td>
    </tr>

    );
}