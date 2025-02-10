// import React from 'react'
// import CBCPropsEx1 from './propsexample/CBCPropsEx1'

// const App = () => {
//   return (
//     <div>
//       <CBCPropsEx1 
//       username= "Sam"
//       age = {25}
//       designation = {["developer", "tester"]}
//       userDetails = {{city: "Hyd", area: "Maisammaguda"}}
//       sendFun = {function(){alert("Hi! I'm from parent component")}}
//       />
//     </div>
//   )
// }

// export default App


//! FBC props

// import React from 'react'
// import FBCPropsEx from './propsexample/FBCPropsEx'

// const App = () => {
//   return (
//     <div>
//       <FBCPropsEx
//       username="Manikanta"
//       isLoggedIn = {true}
//       hobbies = {["Eating", "Listening to music", "Strength Training"]}
//       />
//     </div>
//   )
// }

// export default App


//! props children example

// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import Child from './propsexample/ChildProps'
// import ChildProps from './propsexample/ChildProps'

// const App = () => {
//   return (
//     <div className='App'>

//       <PropsChildrenEx username="Manikanta" company="IBM">
//         <h1>This data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrenEx>
//     </div>
//   )
// }

// export default App


//^ Prop Drilling

// import React from 'react'
// import Child1 from './propsexample/Child1'

// const App = () => {
//   return (
//     <div>App
//       <Child1 university="MRU"/>
//     </div>
//   )
// }

// export default App

//* State components

// import React, { Component } from 'react'
// import CBCStateEx from './stateExample/CBCStateEx'
// import CounterEX from './stateExample/CBCCounterEX'
// import FBCStateEx from './stateExample/FBCStateEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCStateEx/> */}
//         {/* <CounterEX/> */}
//         <FBCStateEx/>
//       </div>
//     )
//   }
// }


//* Basic Hooks

import React from 'react'
import ExUseEffect from './Hooks/ExUseEffect'

const App = () => {
  return (
    <div>
      <ExUseEffect/>
    </div>
  )
}

export default App
