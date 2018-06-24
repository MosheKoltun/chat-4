import * as React from 'react';
import {IbubbleTextProps, Bubble} from "./Bubble";
import './MessageBar.css';


export class MessageBar extends React.Component<IbubbleTextProps,{}> {
    public render() {
        return (
            <div className={"messageBar"}>
                {(this.props.bubbleText !== "")?(<Bubble bubbleText={this.props.bubbleText}/>):null}
            </div>
        );
    }
}
