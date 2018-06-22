import * as React from 'react';
import {IbubbleTextProps, Bubble} from "./Bubble";
import './MessageBar.css';
//import {appService, stateStore} from "../stateStore";

class MessageBar extends React.Component<IbubbleTextProps,{}> {
    public render() {
        return (
            <div className={"messageBar"}>
                <Bubble bubbleText={this.props.bubbleText}/>
            </div>
        );
    }
}

export default MessageBar