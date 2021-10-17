import React, { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "./hooks/useFetch";

import './Board.css';
import '../Serve.css';

export default function Board_edit() {

    const driver = useFetch("http://localhost:3001/driver");
    const board = useFetch("http://localhost:3001/board");
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/board/` ,{

            method:'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                driverName: nameRef.current.value,
                title: titleRef.current.value,
                content: contentRef.current.value,
                isDone: false,
            }),
        }).then(res =>{
           if (res.ok){
               alert("생성이 완료 되었습니다.");
               history.push(`/board_submit`)
           } 
        });
    }

    const nameRef = useRef (null);
    const titleRef = useRef (null);
    const contentRef = useRef (null);

    return (
        <form onSubmit={onSubmit}>
            <div className="main-main5">
                <div className="board">
                    <h1>Driver Review</h1>
                    <div className='form-wrapper'>
                        <div className="input_area">
                            <select ref={nameRef}>
                                {driver.map(driver => (
                                    <option key={driver.id} value={driver.driverName}>
                                        {driver.driverName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input className="title-input" type='text' placeholder='Title' ref={titleRef}>

                        </input>
                        <textarea className="text-area" placeholder='Content' ref={contentRef}>
                            {board.content}
                        </textarea>
                    </div>
                    <button className="submit-button">SUBMIT</button>
                </div>
            </div>
        </form>
    );
}