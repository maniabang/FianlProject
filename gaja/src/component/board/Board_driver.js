import Driver from "./Diver";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

export default function Board_driver(){

    const {name}= useParams();
    // const driverName = dummy.board.filter(board => board.driverName === name);
    const board = useFetch(`http://localhost:3001/board?driverName=${name}`);

    return(
        <>
            <h1>{name}</h1>
            <table>
                <tbody>
                    {board.map(board=>(
                        <Driver board={board} key={board.driverId}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}