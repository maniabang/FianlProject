import Driver from "./Driver";
import { useParams } from "react-router";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";

export default function Board_driver(){

    const {name}= useParams();
    // const driverName = dummy.board.filter(board => board.driverName === name);
    const boards = useFetch(`http://localhost:3001/board?driverName=${name}`);

    return(
        <>
            <div>
                <h1>{name}</h1>
                <table>
                    <tbody>
                        <tr style={{fontWeight: "bold"}}>
                            <td>
                                
                            </td>
                            <td>
                                TITLE
                            </td>
                            <td>
                                CONTENT
                            </td>
                            <td>
                                OPTION
                            </td>
                        </tr>
                        {boards.map(board=>(
                            <Driver board={board} key={board.id} />
                        ))}
                    </tbody>
                </table>
                <br />
                <br />
                <Link to="/" className="btn_link">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/board_list" className="btn_link">LIST</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

        </>
    );
}