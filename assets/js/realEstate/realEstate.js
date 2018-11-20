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
      city : "All",
      homeType : "All",
      bedrooms : "0",
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
      filteredData : listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForm = this.populateForm.bind(this)
  }
  change (event) {
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  filteredData() {
    
      var newData = this.state.listingsData.filter((item) => {
        return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
      })

      if(this.state.city != "All"){
        newData = newData.filter((item) => {
          return item.city == this.state.city
        })
      }

      if(this.state.homeType != "All"){
        newData = newData.filter((item) => {
          return item.homeType == this.state.homeType
        })
      }

      this.setState({
        filteredData : newData
        
      })
  }

  populateForm() {
    // city
    let cities = this.state.listingsData.map((item) => {
      return item.cities
      cities = [...cities]
    })
    cities = new Set(cities)
    // types
    let homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
      homeTypes = [...homeTypes]
    })
    cities = new Set(cities)
    // rooms
    let rooms = this.state.listingsData.map((item) => {
      return item.rooms
      rooms = [...rooms]
    })
    cities = new Set(cities)
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



