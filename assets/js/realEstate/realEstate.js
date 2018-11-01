import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Listings from './Listings'
import Filter from './Filter'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData
    }
    this.change = this.change.bind(this)
  }
  change (event) {
    console.log(event.target.value)
  }
  render () {
    console.log(this.state)
    return (<div> 
      <Header />
      <section id="content-area">
      <Filter change={this.change} />
      <Listings listingsData={this.state.listingsData} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
