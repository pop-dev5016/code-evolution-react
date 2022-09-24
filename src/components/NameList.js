import React from 'react'
import Person from './Person';


function NameList() {
    const names = ['bruce','clark','diana',"rajnikanth"]
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
    const nameList = names.map((lordshiva,index) =><h2 key = {index}>{index}{lordshiva}</h2>)
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

///whwn use index as key

/// the items in your list do not have a unique id.
/// the list is a list  and will not change
/// the list will never be reordered or filtered