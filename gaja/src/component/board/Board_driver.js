import dummy from "../db/data.json";
import Driver from "./Diver";
import { useParams } from "react-router";

export default function Board_driver(){

    const {name}= useParams();
    const driverName = dummy.board.filter(board => board.driverName === name);

    return(
        <>
            <h1>{name}</h1>
            <table>
                <tbody>
                    {driverName.map(board=>(
                        <Driver board={board} key={board.driverId}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}