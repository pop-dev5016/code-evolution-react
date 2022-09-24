import React from 'react'

function Person({person}) {
  return (
    <div>
         <h2>
            i am {person.id}.i am {person.title}.i know {person.body}
            </h2>
    </div>
  )
}

export default Person