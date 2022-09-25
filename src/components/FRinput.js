import React from 'react'

// function FRinput() {
    
    
//   return (
//     <div><input input="text"></input></div>
//   )
// }

const FRinput = React.forwardRef((props,ref)=>{
    return (
             <div><input input="text" ref = {ref}></input></div>
          )
})

export default FRinput