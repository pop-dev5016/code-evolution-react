import React from 'react'

function Columns() {
    const items = []
    {
        items.map(item =>(
            <React.Fragment key = {item.id}>
            <h1>title</h1>
            <p>{item.title}</p>
            </React.Fragment>
                ))

                ///<></>short cut dont pass key
    }

  return (
    <React.Fragment>
      <td>name</td>
      <td>pavithtran</td>
    </React.Fragment>
  )
}

export default Columns
