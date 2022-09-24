import React, { Component } from 'react'

 class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments:'',
         topic:"react"
      }
    }
    handleUsernameChange =(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const {username,comments,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>username</label>
            <input type="text" value={username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
        <label>comments</label>
        <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
        <label>topic</label>
        <select value={topic}onChange={this.handleTopicChange}>
            <option value={"react"}>react</option>
            <option value={"angular"}>angular</option>
            <option value={"vue"}>vue</option>
        </select>
        </div>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default FormHandling