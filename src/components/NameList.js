import React from 'react'
import Person from './Person';


function NameList() {
    const names = ['bruce','clark','diana',"rajni"]
    const persons = [
    {
        id:1,
        name:"pavithran",
        age:28,
        skill: "NO skills ruined himself is best skills for him" 

    }, {
        id:2,
        name:"vigneshwaran",
        age:29,
        skill: "cure ortho related diseases"

    }, {
        id:3,
        name:"navanandhini",
        age:22, 
        skill: "just diagonise diseases"

    }];
    const nameList = names.map(lordshiva =><h2 key = {lordshiva}>{lordshiva}</h2>)
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