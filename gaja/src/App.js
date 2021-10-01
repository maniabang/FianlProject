
import Promotion from "./component/Promotion";
import Slider from "./component/Slider";
import Taxi from "./component/Taxi";
import Black from "./component/Black";
import Green from "./component/Green";
import Sending from "./component/Sending";
import Board_review from "./component/board/Board_review";
import Board_submit from "./component/board/Board_submit";
import Board_list from "./component/board/Board_list";
import Board_driver from "./component/board/Board_driver";
import Board_edit from "./component/board/Board_edit";
import EmptyPage from "./component/board/EmptyPage";



import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./firebase_component/Contacts";

function App() {
  return (
    <div className="row"> 
      <div className="col-md-8 offset-md-1">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
