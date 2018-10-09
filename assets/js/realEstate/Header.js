import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<header> 
        <div> LOGO </div>

        <nav>
            <a href="#">create ads</a>
            <a href="#">about us</a>
            <a href="#">log in</a>
            <a href="#" className="register-btn">register</a>
        </nav>
    
     </header>)
  }
}

