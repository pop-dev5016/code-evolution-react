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
    const nameList = persons.map((person)=><h2>i m {person.name}</h2>)
  return (
    <div>
        {nameList} 
    </div>
  )
}

export default NameList

///when use index as key

/// the items in your list do not have a unique id.
/// the list is a list  and will not change
/// the list will never be reordered or filtered