
import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'


export class MyForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person :  {
        name : '',
        email: '',
        message: '',
      },
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange (e){
    e.preventDefault()
    var person = this.state.person
    person[e.target.name] = e.target.value
    this.setState({person})
  }
  handleSubmit (e){
    e.preventDefault()
    console.log('form output: ', this.state.person)
    var person = {name: '', email: '', message: ''}
    this.setState({person})
  }
  render (){
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <input
          type='text'
          placeholder='Your name ..'
          name='name'
          value={this.state.person.name}
          onChange={this.handleInputChange}
          />
          <input
            type='email'
            placeholder='Your email ..'
            name='email'
            value={this.state.person.email}
            onChange={this.handleInputChange} />
          <textarea
            placeholder='write something ...'
            name='message'
            value={this.state.person.message}
            onChange={this.handleInputChange} />
        <button className='btn' type='submit'>send it</button>
        </form>
      </div>
    )
  }
}
