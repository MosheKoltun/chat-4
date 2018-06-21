import * as React from 'react';
import './App.css';

import InputBar from './Components/InputBar';
import MessageBar from './Components/MessageBar';
import TreeBar from "./Components/TreeBar";
import LoginModal from "./Components/LoginModal";
import {Group} from "./Modules/group";
import ChatTree from "./Logic/chat-tree";



class App extends React.Component {
    //class properties
    private db: { [key: string]: string[] } = {};

    constructor(props: any) {
        super(props);
    }

    public addNewMessage(message : string, time : number) {
        const groupName = ChatTree().returnCurrentNodeName();
        this.db[groupName].push(message);
        console.log(this.db);
    }

    public render() {
        return (
            <>
                <LoginModal/>
                <div className={"window"}>
                    <div className={"left"}>
                      <TreeBar/>
                    </div>

                    <div className={"right"}>
                        <MessageBar/>
                        <InputBar addNewMessageCallBack={this.addNewMessage}/>
                    </div>
                </div>
            </>
        );
      }
}

export default App;
