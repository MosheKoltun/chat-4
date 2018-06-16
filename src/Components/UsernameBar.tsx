import * as React from 'react';
import './UsernameBar.css';
import * as ChatStateStore from '../StateStore/stateStore';

class UsernameBar extends React.Component {

    private usernameBarRef : React.RefObject<any>;

    constructor(props:any) {
        super(props);
        this.usernameBarRef = React.createRef();

        this.state = {
            username : ChatStateStore.getUsername(),
        }
    }

    private didAuthenticationSucceed = () => {
        if (ChatStateStore.getAuthenticationSucceedFlag() === true) {
            this.usernameBarRef = "test"
        }
    };

    public render() {
        return (
            <p className={"usernameBar"} ref={this.usernameBarRef} onLoad={}> </p>
        );
    }
}

export default UsernameBar;
