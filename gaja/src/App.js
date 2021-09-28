
import Promotion from "./component/Promotion";
import Slider from "./component/Slider";
import Taxi from "./component/Taxi";
import Black from "./component/Black";
import Green from "./component/Green";
import Sending from "./component/Sending";
import Board_main from "./component/board/Board_main";
import Board_submit from "./component/board/Board_submit";
import Board_list from "./component/board/Board_list";
import Board_driver from "./component/board/Board_driver";
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
          <Route path="/board_main">
            <Board_main />
          </Route>
          <Route path="/board_submit">
            <Board_submit />
          </Route>
          <Route path="/board_list">
            <Board_list />
          </Route>
          <Route path="/name/:name">
            <Board_driver />
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
