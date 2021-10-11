import React from 'react';
import {Switch, Route} from "react-router-dom";

// Components
import Home from "../../Pages/Home/home.page";
import Multiplayer from "../../Pages/Multiplayer/Multiplayer.page";
import Room from "../../Pages/Room/Room.page";
class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/multiplayer/rooms/:roomId" component={Room} />
                <Route path="/multiplayer" component={Multiplayer} />
            </Switch>
        );
    }
}

export default App;