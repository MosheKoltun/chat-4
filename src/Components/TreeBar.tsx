import * as React from 'react';
import ChatTree from '../Logic/chat-tree'
import './TreeBar.css';

class TreeBar extends React.Component {
    private ulRef : React.RefObject<any>;

    constructor(props:any) {
        super(props);
        this.ulRef = React.createRef();
    }

    componentDidMount() {
        this.createTree();
    }

    private createTree = () => {
        fetch('./mock-DB/tree-data.json')
            .then((response)=> {
                return response.json();
            })
            .then((myJson)=>{
                ChatTree(this.ulRef['current']).load(myJson);
                console.log("this.ulRef = " + this.ulRef);
                console.log("this.ulRef.value = " + this.ulRef.current.value);
            });
    };

    public render() {
        return (
            <div className={"treeBar"}>
                <ul ref={this.ulRef} tabIndex={0}/>
            </div>
        );
    }
}

export default TreeBar;