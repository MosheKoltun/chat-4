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
    //private db : { [key: string]: string[] };
    private db = {};

    constructor(props: any) {
        super(props);
        this.state = {
            currentGroup : "",
        }
    }

    public updateCurrentTreeElement = (currentElement : string) => {
        this.setState({currentGroup : currentElement});
    };

    public addNewMessage = (message : string) => {
        const currentElement = this.state['currentGroup'];
        //console.log("currentElement = " + currentElement);
        //console.log(message);
        if (!this.db[currentElement]) {
            this.db[currentElement]=[];
        }
        this.db[currentElement].push(message);
        console.log(this.db)
    };


    public render() {
        return (
            <>
                <LoginModal/>
                <div className={"window"}>
                    <div className={"left"}>
                      <TreeBar updateCurrentTreeElementCallBack={this.updateCurrentTreeElement}/>
                    </div>

                    <div className={"right"}>
                        <MessageBar/>
                        <InputBar addNewMessageInputCallBack={this.addNewMessage}/>
                    </div>
                </div>
            </>
        );
      }
}

export default App;
