import React from "react";

const Hello = ()=>{
    // return (
    //     <div classname="dummyclass">
    //         <h1>hello poppy</h1>
    //     </div>
    // )

    return React.createElement(
        "div",
        {id:"hello",className:"dummyclass"}, 
        React.createElement("h1",null,"hello pavi"))
};

export default Hello