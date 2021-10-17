
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Promotion />
            <Slider />
          </Route>
          <Route path="/taxi">
            <Taxi />
          </Route>
          <Route path="/black">
            <Black />
          </Route>
          <Route path="/green">
            <Green />
          </Route>
          <Route path="/sending">
            <Sending />
          </Route>
          <Route path="/board_review">
            <Board_review />
          </Route>
          <Route path="/board_submit">
            <Board_submit />
          </Route>
          <Route path="/board_list">
            <Board_list />
          </Route>
          <Route path="/board/:name">
            <Board_driver />
          </Route>
          <Route path="/board_review/:id">
            <Board_edit />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
