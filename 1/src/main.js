import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {content: cowsay.say({text: this.newIpsum()})}
    this.handleClick = this.handleClick.bind(this)
    this.newIpsum = this.newIpsum.bind(this)
  }
  newIpsum(){
    return faker.lorem.words(5)
  }
  handleClick(e){
    this.setState({content: cowsay.say({text: this.newIpsum()})})
  }


  render(){
    return (
      <div className='middle'>
        <h1> Cowsay Lorem </h1>
        <pre> {this.state.content} </pre>
        <button className='btn' onClick={this.handleClick}> click me! </button>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
