import React from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";

// Components
import Home from "../../Pages/Home/home.page";
import Multiplayer from "../../Pages/Multiplayer/Multiplayer.page";
import Room from "../../Pages/Room/Room.page";
class App extends React.Component {
    render() {
        return (
            <Router basename="/Tic-Tac-Toe-v2">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/multiplayer/rooms/:roomId" component={Room} />
                    <Route exact path="/multiplayer" component={Multiplayer} />
                    <Route>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;