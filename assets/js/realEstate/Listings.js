import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    
  }
  render () {
    return (
      <section className="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div>390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
            <i className="fas fa-list" aria-hidden="true"></i>
            <i className="fas fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="Address">Address</span>
                <div className="details">
                <div className="user-img">
                <div className="user-details">
                  <span className="user-name">Bob Tim</span>
                  <span className="post-date">10/10/2090</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space"><i className="far fa-square" aria-hidden="true"></i>
                  <span>1000 Ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed" aria-hidden="true"></i>
                    
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="pagination">

        </section>

      </section>
    )
  }
}



