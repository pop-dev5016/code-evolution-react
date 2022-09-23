import React from "react";

// function Greet(){
//     return <h1>never give up</h1>
// }
const Greet = (props)=>{ //////but props nuse pannu da

    return (
        <div>
        <h1>{props.name} never give up {props.regno}</h1>
        {props.children}
        </div>
    )
}




export default Greet