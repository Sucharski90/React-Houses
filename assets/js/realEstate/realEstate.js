import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Listings from './Listings'
import Filter from './Filter'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<div> 
      <Header />
      <section id="content-area">
      <Filter />
      <Listings />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
