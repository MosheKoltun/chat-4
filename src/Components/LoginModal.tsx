import * as React from 'react';
import './LoginModal.css';
import * as ChatStateStore from '../StateStore/stateStore';

class LoginModal extends React.Component {

    private modalRef : React.RefObject<any>;

    state = {
        //hardcoded for development purposes
        //in production need to make values empty
        username: "Ori",
        password: "1234"
    };

    constructor(props:any) {
        super(props);
        this.modalRef = React.createRef();
    }

    HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick = () => {
        fetch('./mock-DB/username-and-password-data.json')
            .then((response)=> {
                return response.json();
            })
            .then((myJson)=>{
                //check authentication
                if (myJson[0][this.state.username] !== this.state.password) {
                    alert("Incorrect username and password!");
                    return;
                }
                //if authentication is successful then update stateStore about username
                console.log(this.state.username)
                ChatStateStore.setAuthenticationSucceedFlag();
                ChatStateStore.setUsername(this.state.username);
                //close modal
                this.modalRef['current'].style.display = "none";

            });
    };

    public render() {
        return (
            <div ref={this.modalRef} className="modal">
                <form className="modal-content">
                    <label><b>Username</b></label>
                    <br/>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.HandleInputChange} required/>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.HandleInputChange} required/>
                    <div className="buttonsDiv">
                        <br/>
                        <button type="button" onClick={this.handleClick}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginModal;
