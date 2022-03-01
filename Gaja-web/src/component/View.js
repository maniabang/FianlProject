import React from 'react';
import Header from './Header'
import Main from './Main';
import Menu from './Menu';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aboutus from './Aboutus';
import CSR from './CSR';
import Gtaxi from './Gtaxi';
import Airport from './Airport';
import Journey from './Journey';
import Able from './Able';
import ReactPage from './ReactPage';
import Google from './google';
import Json from './firebase';
import Nodejs from './Nodejs';
import Redux from './Redux';
import NewsMain from './NewsMain';
import Promotion from "./Promotion";
import Slider from "./Slider";
import Taxi from "./Taxi";
import Black from "./Black";
import Green from "./Green";
import Sending from "./Sending";
// import Board_review from "./board/Board_review";
// import Board_submit from "./board/Board_submit";
// import Board_list from "./board/Board_list";
// import Board_driver from "./board/Board_driver";
// import Board_edit from "./board/Board_edit";
// import EmptyPage from "./board/EmptyPage";
// test123
import NewsPage from './NewsPage';
import NewsLearnMore from './NewsLearnMore';

export default function View() {
    const [menu, setMenu] = useState(false);
    const setFlag = () => {
        setMenu(!menu);
    };
    const setTrue = () => {
        setMenu(true);
    };
    useEffect(() => {
        console.log(menu);
    },[menu])
    return (
        <BrowserRouter>
            <div>
                <Header setTrue={setTrue}/>
                <Switch>
                    <Route exact path="/">
                        <Main />
                        <NewsMain flag={menu} />
                        <Promotion flag={menu} />
                        <Slider flag={menu} />
                        <Menu flag={menu} setMenu={setFlag} setTrue={setTrue} />
                    </Route>
                    <Route path="/about-gaja/about-us">
                        <Aboutus />
                    </Route>
                    <Route path="/about-gaja/responsibility">
                        <CSR />
                    </Route>
                    <Route path="/services/g-taxi">
                        <Gtaxi />
                    </Route>
                    <Route path="/services/a-irport">
                        <Airport />
                    </Route>
                    <Route path="/services/j-ourney">
                        <Journey />
                    </Route>
                    <Route path="/services/a-ble">
                        <Able />
                    </Route>
                    <Route path="/technology/react">
                        <ReactPage />
                    </Route>
                    <Route path="/technology/google">
                        <Google />
                    </Route>
                    <Route path="/technology/json-server">
                        <Json />
                    </Route>
                    <Route path="/technology/nodejs">
                        <Nodejs />
                    </Route>
                    <Route path="/technology/nodejs">
                        <Nodejs />
                    </Route>
                    <Route path="/technology/redux">
                        <Redux />
                    </Route>
                    <Route path="/NewsPage">
                        <NewsPage />
                    </Route>
                    <Route path="/NewsLearnMore">
                        <NewsLearnMore />
                    </Route>
                    <Route path="/NewsMain">
                        <NewsMain />
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
                    {/* <Route path="/board_review">
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
                    </Route> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}