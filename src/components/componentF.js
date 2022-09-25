import React, { Component } from 'react'
import { UserConsumer } from './UserContect'

export class componentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username)=>{
            return<div>hello {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export default componentF       ///////////only work class components