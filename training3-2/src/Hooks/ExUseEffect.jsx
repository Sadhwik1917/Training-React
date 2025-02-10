//^ Object Destructuring

// let obj = {
//     a:1,
//     b:2,
//     c:3
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// let {a, b, c} = obj;

// console.log(a);
// console.log(b);
// console.log(c);


import React, { useState ,useEffect } from 'react'

const ExUseEffect = () => {
    // const [count, setCount] = useState(0);
    //*
    // useEffect(() => {
    //     document.title = 'MRU'
    //     console.log("Use Effect Called!!");
        
    //     setTimeout(()=> {
    //         setCount(1400);
    //         console.log("Count Updated to 1400");
    //     }, 4000)
    // })

    //! Fetching using useEffect()
    const[users, setUsers] = useState([]);
    // console.log(users);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json().then(data => {
            // console.log(data);
            setUsers(data);
        }))
        .catch(err => console.error(err))
    }, []);
  return (
    <div>
        <h1>Example for UseEffect</h1>
        {/* <h2>{count}</h2>  */}
            {
            users.map((user, i) =>{
                return(
                    // <>
                    //     <h3>Name: {user.name}</h3>
                    //     <h4>Email: {user.email}</h4>
                    // </>

                    //! OR
                    
                    <React.Fragment key={i}>
                        <h3>Name: {user.name}</h3>
                        <h4>Email: {user.email}</h4>
                    </React.Fragment>
                )
            })
            }
    </div>
  )
}

export default ExUseEffect