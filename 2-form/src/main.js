'use strict'

import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'

import { MyForm } from './component/myForm'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div className='middle'>
        <h1> Contact Form </h1>
         <MyForm />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
