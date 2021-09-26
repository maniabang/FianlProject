
import Promotion from "./component/Promotion";
import Slider from "./component/Slider";
import Taxi from "./component/Taxi";
import Black from "./component/Black";
import Green from "./component/Green";
import Sanding from "./component/Sanding";
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
          <Route path="/sanding">
            <Sanding />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
