import React from 'react';

class CBCPropsEx1 extends React.Component{
    render(){
        console.log(this)
        return(
            <div> CBCPropsEx1
            <h1>{this.props.username}</h1>
            <h1>{this.props.age}</h1>
            <div>
                <h1>{this.props.designation[0]}</h1>
            </div>
                <h1>{this.props.userDetails.city}</h1>
                <button onClick={this.props.sendFun}> Click Here!</button>
            </div>
        )
    }
}

export default CBCPropsEx1;