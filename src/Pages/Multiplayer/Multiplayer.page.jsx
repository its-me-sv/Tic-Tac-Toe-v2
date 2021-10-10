import React from "react";

import {
    MultiplayerContainerStyles,
    MenuFormStyles,
    RoomTitleStyles,
    RoomStyles,
    JoinStyles,
    JoinButtonStyles,
    CreateButtonStyles
} from "./Multiplayer.styles";

// Components
import Header from "../../components/header/header.component";

class Multiplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: ""
        };
    }

    handleChange = event => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleRoom = (event) => {
        event.preventDefault();
        const {roomId} = this.state;
        const regex = /^[a-z0-9]+$/i;
        if (roomId.length < 6) {
            window.alert("Room Id must be atleast 6 characters long");
            return;
        }
        if (roomId.includes(" ") || !regex.test(roomId)) {
            window.alert("Room Id can only have alphanumerics");
            return;
        }
        this.props.history.push(`${this.props.match.url}/rooms/${roomId}`);
    }

    render() {
        return (
            <MultiplayerContainerStyles>
                <Header />
                <MenuFormStyles onSubmit={this.handleRoom}>
                    <RoomTitleStyles>Rooms</RoomTitleStyles>
                    <RoomStyles 
                        type="text"
                        placeholder="Room ID"
                        name="roomId"
                        value={this.state.roomId}
                        onChange={this.handleChange}
                    />
                    <JoinStyles>
                        <JoinButtonStyles 
                            type="submit"
                        >Join Room</JoinButtonStyles>
                        <CreateButtonStyles  
                            type="submit"
                        >Create Room</CreateButtonStyles>
                    </JoinStyles>
                </MenuFormStyles>
            </MultiplayerContainerStyles>
        );
    }
}

export default Multiplayer;