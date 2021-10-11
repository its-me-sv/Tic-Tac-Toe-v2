import React from "react";
import {io} from "socket.io-client";
import {connect} from "react-redux";

import {
    RoomContainerStyles,
    RoomTitleStyles,
    PlayerStyles,
    LabelStyles,
    PlayerNameStyles,
    UpdateButtonStyles,
    BoardContainerStyles
} from "./Room.styles";

import Board from "../../components/board/board.component";
import Result2 from "../../components/result2/result2.component";
import {ReactComponent as Loader} from "../../assets/Loader.svg";

import {
    setCurrName,
    setCurrId,
    setPlayer2,
    setWeapon,
    updateBoard,
    setChance,
    resetMultiplayer,
    setRoomId,
    setResult,
    updateState
} from "../../redux/multiplayer/multiplayer.actions";

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            playerLeft: false
        };
        this.props.setRoomId(props.match.params.roomId);
        this.socket = null;
    }
    
    componentDidMount() {
        let socketUrl = process.env.NODE_ENV === 'development' 
                        ? "http://localhost:5000/" 
                        : "https://desolate-island-20928.herokuapp.com/";
        this.socket = io(socketUrl);
        this.socket.on("connect", () => this.setState({connected: true}));
        this.socket.emit("joinRoom", this.props.match.params.roomId);
        this.socket.on("roomFull", () => {
            this.props.setRoomId("");
            window.alert("Room Full");
            this.props.history.push("/multiplayer");
        });
        const {setId, setWeapon, setChance, setP2} = this.props;
        this.socket.on("first", sockId => {
            setId(sockId);
            setWeapon("cross");
            setChance();
        });
        this.socket.on("second", sockId => {
            setId(sockId);
            setWeapon("circle");
        });
        this.socket.on("nameChanged", name => {
            setP2(name);
        });
        this.socket.on("updateBoard", ({pos, weapon}) => {
            this.props.setBoard(pos, weapon);
            setChance();
        });
        this.socket.on("gameResult", ({result}) => {
            this.props.setResult(result);
        });
        this.socket.on("newPlayer", rmId => {
            window.alert(`${this.props.player2} has joined the game`);
            const {currName, board} = this.props;
            const playerData = {
                player2: currName,
                board,
                isChance: !this.props.isChance
            };
            const dataToSend = {
                playerData,
                roomId: rmId
            };
            this.socket.emit("newPlayer", {...dataToSend});
        });
        this.socket.on("updateState", stateObj => this.props.updateState(stateObj));
        this.socket.on("playerLeft", async () => {
            this.setState({playerLeft: true});
        });
    }

    componentWillUnmount() {
        const {reset} = this.props;
        reset();
        this.socket.emit("playerLeft");
        this.socket.disconnect();
    }

    handleNameChange = event => {
        const {setName} = this.props;
        setName(event.target.value);
    }

    handleNameUpdate = () => {
        const {currName, roomId} = this.props;
        console.log("hello", roomId);
        this.socket.emit("nameChanged", {
            roomId,
            name: currName
        });
    }

    render() {
        const {currName, player2, roomId, result} = this.props;
        const {connected, playerLeft} = this.state;
        return (
            <RoomContainerStyles>
                {result !== null && <Result2 />}
                {playerLeft && <Result2 left={true}/>}
                {
                    connected 
                    ? (
                        <>
                                <RoomTitleStyles>{roomId}</RoomTitleStyles>
                                <PlayerStyles>
                                    <LabelStyles style={
                                        {
                                            color: "green",
                                            marginLeft: "2rem",
                                            marginRight: "1rem"
                                        }
                                    }>You</LabelStyles>
                                    <PlayerNameStyles
                                        type="text"
                                        value={currName}
                                        onChange={this.handleNameChange}
                                    />
                                    <UpdateButtonStyles
                                        onClick={this.handleNameUpdate}
                                    >Update</UpdateButtonStyles>
                                </PlayerStyles>
                                <PlayerStyles>
                                    <LabelStyles
                                        style={{color: "red"}}
                                    >Opponent</LabelStyles>
                                    <PlayerNameStyles
                                        type="text"
                                        value={player2}
                                        readOnly={true}
                                    />
                                    <UpdateButtonStyles disabled={true}>Update</UpdateButtonStyles>
                                </PlayerStyles>
                                <BoardContainerStyles>
                                    <Board
                                        multiplayer={true}
                                        socket={this.socket}
                                    />
                                </BoardContainerStyles>
                        </>
                    ) : (
                        <>
                            <Loader />
                            <LabelStyles>Connecting to Server...</LabelStyles>
                        </>
                    )
                }
            </RoomContainerStyles>
        );
    }
}

const mapStateToProps = ({multiplayer}) => ({
    ...multiplayer
});

const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(setCurrName(name)),
    setId: id => dispatch(setCurrId(id)),
    setP2: name => dispatch(setPlayer2(name)),
    setWeapon: weapon => dispatch(setWeapon(weapon)),
    setBoard: (pos, val) => dispatch(updateBoard(pos, val)),
    setChance: () => dispatch(setChance()),
    reset: () => dispatch(resetMultiplayer()),
    setRoomId: id => dispatch(setRoomId(id)),
    setResult: res => dispatch(setResult(res)),
    updateState: obj => dispatch(updateState({...obj}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);