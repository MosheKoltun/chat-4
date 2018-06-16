import * as React from 'react';
import './App.css';

import InputBar from './Components/InputBar';
import MessageBar from './Components/MessageBar';
import TreeBar from "./Components/TreeBar";
import LoginModal from "./Components/LoginModal";
import UsernameBar from "./Components/UsernameBar";


class App extends React.Component {

    constructor(props:any){
        super(props);

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
                        <UsernameBar/>
                        <MessageBar/>
                        <InputBar/>
                    </div>
                </div>
            </>
        );
      }
}

export default App;
