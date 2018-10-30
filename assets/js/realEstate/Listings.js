import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'matt'
    }
    this.loopListings = this.loopListings.bind(this)
  }
  loopListings () {
    let {listingsData} = this.props

    return listingsData.map((listing) => {
        return (
          <div className="col-md-3">
    <div className="listing">
      <div className="listing-img">
        <span className="address">40 Heart st</span>
          <div className="details">     
          <div className="user-img"> </div>
           <div className="col-md-9">
          <div className="user-details">
            <span className="user-name">Bob Tim</span>
            <span className="post-date">10/10/2090</span>
          </div>      
          <div className="listing-details">
            <div className="floor-space">          
              {/* <i className="fa fa-square"></i> */}
              <span>1000 Ft&sup2;</span>
            </div>
            <div className="bedrooms">
              {/* <i className="fa fa-bed"></i> */}
              <span>3 bedrooms</span>
              </div>
            </div>
            <div className="view-btn">
              View Listing
            </div>
          </div>
          </div>
          </div>
            <div className="bottom-info">
              <span className="price">$1000 / Month</span> 
              <span className="location"><i className="fa fa-map-marker-alt" aria-hidden="true"></i> Farmingdale, NY </span> 
            </div>
        </div>
        </div>
        )
    })
  }
  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
            <i className="fa fa-list" aria-hidden="true"></i>
            <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
        
              {this.loopListings()}
            </section>

        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>

      </section>)
  }
  
}



