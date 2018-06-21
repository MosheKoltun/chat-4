import * as React from 'react';
import './InputBar.css';
import * as App from '../App';
import ChatTree from '../Logic/chat-tree'

interface IInputProps {
    addNewMessageCallBack: Function;
}

class InputBar extends React.Component <IInputProps,{}>{

    private inputRef : React.RefObject<any>;

    constructor(props:any) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleAddMsg = () => {

        const message = this.inputRef.current.value;
        console.log("value = " + message);
        this.props.addNewMessageCallBack(message);
        // let myMsgDB = stateStore.messageDB;
        // if (myMsgDB[stateStore.selectedGroup]) {
        //     myMsgDB[stateStore.selectedGroup].push('something');
        // }
        // console.log(myMsgDB[stateStore.selectedGroup]);
    };

    public render() {
        return (
            <div className={"inputBar"}>
                <input ref={this.inputRef} className="input" type="text" name="input" autoComplete="off"/>
                <button onClick={this.handleAddMsg}>Send</button>
            </div>
        );
    }
}

export default InputBar;
