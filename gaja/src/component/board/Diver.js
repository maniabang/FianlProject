import { useState } from "react";

export default function Driver({board: b}){
    
    const [board, setBoard] = useState(b);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(board.isDone);

    console.log(board.driverId);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/board/${board.id}` ,{
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...board,
                isDone: !isDone,
            }),
        }).then(res =>{
           if (res.ok){
               setIsDone(!isDone);
           } 
        });
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/board/${board.id}`,{
                method: 'DELETE',
            }).then(res => {
                if(res.ok) {
                    setBoard({ id: 0})
                }
            })
        }
    }

    if (board.id === 0){
        return null;
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
            <button onClick={del} className="btn_del">DELETE</button>
        </td>
    </tr>

    );
}