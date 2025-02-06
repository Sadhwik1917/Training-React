import React, {Component} from "react";

class  CBCStateEx extends Component {
    constructor(){
        super();
        this.state = {
            username: "Manikanta"
        }
    }
    ChangeName = () =>{
        this.setState({username : "Shravan"});
    }
    render() { 
        console.log(this)
        return (
            <>
            <div>CBCStateEx</div>
            <h1>{this.state.username}</h1>
            <button onClick={this. ChangeName}>Update the State</button>

            </>
        );
    }
}
 
export default CBCStateEx;