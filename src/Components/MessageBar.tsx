import * as React from 'react';
import Bubble from "./Bubble";
import './MessageBar.css';
//import {appService, stateStore} from "../stateStore";

class MessageBar extends React.Component {
    public render() {
        return (
            <div className={"messageBar"}>
                <Bubble/>
            </div>
        );
    }
}

export default MessageBar