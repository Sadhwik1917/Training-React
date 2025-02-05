import React from 'react'

const FBCPropsEx = (props) => {
    // console.log(props)
    if(props.isLoggedIn == true){
        return(
            <div>
                <h1>FBCPropsEX</h1>
                <h1>Welcome!! {props.username}</h1>{
                    props.hobbies.map((value) =>{
                        return <li>{value}</li>
                    })
                }
            </div>
        )
    }else{
        return(
            <dix>
                <h1>Please Login First!!</h1>
            </dix>
        )
    }
}

export default FBCPropsEx