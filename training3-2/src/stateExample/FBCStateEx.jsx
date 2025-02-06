import React,{useState} from 'react'

const FBCStateEx = () => {
    // const data = React.useState(100)
    // console.log(data[0])
    // console.log(data[1])
    const [value, setValue] = useState("MRU");
    // console.log(value);
    let changeName = () =>{
        setValue("Malla Reddy University",);
    }
    
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={changeName}>Click To View Full Name!!</button>
    </div>
  )
}

export default FBCStateEx
