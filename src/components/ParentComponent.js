import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"Appa"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    
    greetParent(child){
        alert(`"kulandhaivelu"${this.state.parentname} from ${child}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent