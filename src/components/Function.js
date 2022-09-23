import React from "react";

// function Greet(){
//     return <h1>never give up</h1>
// }
const Greet = (props)=>{ //////but props nuse pannu da
    const {name,regno} = props
    return (
        <div>
        <h1>{name} never give up {regno}</h1>
        </div>
    )
}




export default Greet