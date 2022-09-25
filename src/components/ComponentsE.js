import React, { Component } from 'react'
import ComponentF from './componentF'
import UserContext from './UserContect'

export class ComponentsE extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
        component E context {this.context}
        <ComponentF></ComponentF>
      </div>
    )
  }
}

ComponentsE.contextType=UserContext
export default ComponentsE                ////////////singlr context using context type