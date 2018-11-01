import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    
  }
  render () {
    return (
        <section id="filter">
        <div className="inside">
        <h4>Filter</h4>
        <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
            <option value="farmingdale">Farmingdale</option>
            <option value="massapequa">Massapequa</option>
        </select>
        <select name="housetype" className="filters housetype" onChange={this.props.change}>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Apartment">Apartment</option>
        </select>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="2">2 BR</option>
            <option value="3">3 BR</option>
            <option value="4">4 BR</option>
            <option value="5">5 BR</option>
            <option value="6">6 BR</option>
        </select>
        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" onChange={this.props.change} value="0" />
            <input type="text" name="max-price" className="max-price" onChange={this.props.change} value="100000000"/>
        </div>

        <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space" onChange={this.props.change} value="0"/>
            <input type="text" name="max-floor-space" className="max-floor-space" onChange={this.props.change} value="5000"/>
        </div>

        <div className="filters extras">
        <span className="title">Extras</span>
            <label for="extras"><span>Elevators</span> <input name="extras" value="elevator" type="checkbox" onChange={this.props.change}/></label>
            <label for="extras"><span>Swiming Pool</span> <input name="extras" value="swiming-pool" type="checkbox" onChange={this.props.change}/></label>
            <label for="extras"><span>Finished Basement</span> <input name="extras" value="finished-basement" type="checkbox" onChange={this.props.change}/></label>
            <label for="extras"><span>Gym</span> <input name="extras" value="gym" type="checkbox" onChange={this.props.change}/></label>
        </div>
        </div>
        </section>
    )
  }
}

