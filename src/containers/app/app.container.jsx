import React from 'react';
import {Switch, Route, HashRouter, Redirect} from "react-router-dom";

import Home from "../../Pages/Home/home.page";
import Multiplayer from "../../Pages/Multiplayer/Multiplayer.page";
import Room from "../../Pages/Room/Room.page";
class App extends React.Component {
    render() {
        return (
            <HashRouter basename='/'>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/multiplayer/rooms/:roomId" component={Room} />
                    <Route exact path="/multiplayer" component={Multiplayer} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;