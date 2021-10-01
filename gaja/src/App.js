
import Promotion from "../../../FinalProject-2/gaja/src/component/Promotion";
import Slider from "../../../FinalProject-2/gaja/src/component/Slider";
import Taxi from "../../../FinalProject-2/gaja/src/component/Taxi";
import Black from "../../../FinalProject-2/gaja/src/component/Black";
import Green from "../../../FinalProject-2/gaja/src/component/Green";
import Sending from "../../../FinalProject-2/gaja/src/component/Sending";
import Board_review from "../../../FinalProject-2/gaja/src/component/board/Board_review";
import Board_submit from "../../../FinalProject-2/gaja/src/component/board/Board_submit";
import Board_list from "../../../FinalProject-2/gaja/src/component/board/Board_list";
import Board_driver from "../../../FinalProject-2/gaja/src/component/board/Board_driver";
import Board_edit from "../../../FinalProject-2/gaja/src/component/board/Board_edit";
import EmptyPage from "../../../FinalProject-2/gaja/src/component/board/EmptyPage";



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
