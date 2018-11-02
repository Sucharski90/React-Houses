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
      name: 'Matt',
      listingsData,
      min_price : 0,
      max_price : 10000000,
      min_floor_space : 0,
      max_floor_space : 5000,
      min_floor_space : 0,
      max_floor_space : 5000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swiming_pool: false,
      flteredData : listingsData
    }
    this.change = this.change.bind(this)
    this.flteredData = this.flteredData.bind(this)
  }
  change (event) {
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }
  flteredDate() {

  }
  render () {
    return (<div> 
      <Header />
      <section id="content-area">
      <Filter change={this.change} globalState={this.state}/>
      <Listings listingsData={this.state.filteredData} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)



