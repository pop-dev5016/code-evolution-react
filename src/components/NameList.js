import React from 'react'


function NameList() {
    const name = ["Bruce","Clark","Diana","Pavitharan","Vigneshwaran","Navanandhini"];
    const nameList = name.map(name => <h2>{name}</h2>)
  return (
    <div>
        {/* <h2>{name[0]}</h2>
        <h2>{name[1]}</h2>
        <h2>{name[2]}</h2>    /////for 100 string arrat what u do man?
        <h2>{name[3]}</h2>
        <h2>{name[4]}</h2>
        <h2>{name[5]}</h2> */}
        {nameList}

        
    </div>
  )
}

export default NameList