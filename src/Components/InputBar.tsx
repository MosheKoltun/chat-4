import * as React from 'react';
import './InputBar.css';
//import {appService, stateStore} from "../stateStore";


class InputBar extends React.Component {

    handleAddMsg = () => {
        // let myMsgDB = stateStore.messageDB;
        // if (myMsgDB[stateStore.selectedGroup]) {
        //     myMsgDB[stateStore.selectedGroup].push('something');
        // }
        // console.log(myMsgDB[stateStore.selectedGroup]);
    };

    public render() {
        return (
            <div className={"inputBar"}>
                <input className="input" type="text" name="input" autoComplete="off"/>
                <button onClick={this.handleAddMsg}>Send</button>
            </div>
        );
    }
}

export default InputBar;
