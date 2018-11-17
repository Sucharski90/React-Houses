webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '43 heart street',
    city: 'Farmingdale',
    state: 'NY',
    rooms: 2,
    price: 230000,
    floorSpace: 2500,
    extras: ['pool'],
    homeType: 'Apartment',
    image: 'http://ajackpot.com/images/inside-millionaire-homes/data1/images/insidemillionaireshouses15.jpg'
}, {
    address: '48 Fallwood road',
    city: 'Huntington',
    state: 'NC',
    rooms: 6,
    price: 450000,
    floorSpace: 3400,
    extras: ['elevator', 'gym'],
    homeType: 'House',
    image: 'http://tasteofcountry.com/files/2018/08/spectacular-celebrity-homes.jpg?w=980&q=75'
}, {
    address: '30 Oak Avenue',
    city: 'Bellmore',
    state: 'NY',
    rooms: 5,
    price: 600000,
    floorSpace: 3200,
    extras: ['elevator', 'pool'],
    homeType: 'House',
    image: 'https://lentinemarine.com/wp-content/uploads/simple-house-painting-inspirations-one-total_482229.jpg'
}, {
    address: '90 Broadway Street',
    city: 'Rockville Center',
    state: 'NY',
    rooms: 3,
    price: 420000,
    floorSpace: 3500,
    extras: ['elevator', 'pool'],
    homeType: 'House',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbREg69bXlEEj_vXOdss3glg4Q_v_0VOf8K46NPcz5YHMcEOJlHg'
}, {
    address: '3 Woodward Parkway',
    city: 'Farmingdale',
    state: 'NJ',
    rooms: 4,
    price: 2800000,
    floorSpace: 1400,
    extras: ['pool'],
    homeType: 'house',
    image: 'https://bahayofw.com/wp-content/uploads/2017/08/FB_IMG_1503406401235-1.jpg'
}, {
    address: '56 Maple Road',
    city: 'Massapequa',
    state: 'NY',
    rooms: 2,
    price: 180000,
    floorSpace: 1400,
    extras: [],
    homeType: 'House',
    image: 'http://erinnsbeauty.com/wp-content/uploads/2018/06/simple-houses-classy-design-.jpg'
}, {
    address: '34 Grand Avenue',
    city: 'Bethpage',
    state: 'NY',
    rooms: 6,
    price: 250000,
    floorSpace: 1400,
    extras: ['elevator', 'gym', 'pool'],
    homeType: 'House',
    image: 'https://i.ytimg.com/vi/Mcp2wgbYzMw/maxresdefault.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this$state;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = (_this$state = {
      name: 'Matt',
      listingsData: _listingsData2.default,
      city: "All",
      homeType: "All",
      bedrooms: "0",
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000
    }, _defineProperty(_this$state, 'min_floor_space', 0), _defineProperty(_this$state, 'max_floor_space', 5000), _defineProperty(_this$state, 'elevator', false), _defineProperty(_this$state, 'finished_basement', false), _defineProperty(_this$state, 'gym', false), _defineProperty(_this$state, 'swiming_pool', false), _defineProperty(_this$state, 'filteredData', _listingsData2.default), _this$state);
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      this.setState({
        filteredData: newData

      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));
    }

    _createClass(Filter, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "filter" },
                _react2.default.createElement(
                    "div",
                    { className: "inside" },
                    _react2.default.createElement(
                        "h4",
                        null,
                        "Filter"
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "city", className: "filters city", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            { value: "all" },
                            "All Cities"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "Farmingdale" },
                            "Farmingdale"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "Massapequa" },
                            "Massapequa"
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "homeType", className: "filters homeType", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            { value: "All" },
                            "All Types"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "House" },
                            "House"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "Condo" },
                            "Condo"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "Apartment" },
                            "Apartment"
                        )
                    ),
                    _react2.default.createElement(
                        "select",
                        { name: "bedrooms", className: "filters bedrooms", onChange: this.props.change },
                        _react2.default.createElement(
                            "option",
                            { value: "0" },
                            "0+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "1" },
                            "1+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "2" },
                            "2+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "3" },
                            "3+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "4" },
                            "4+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "5" },
                            "5+ BR"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "6" },
                            "6+ BR"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters price" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Price"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalState.min_price }),
                        _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalState.max_price })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters floor-space" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Floor Space"
                        ),
                        _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
                        _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "filters extras" },
                        _react2.default.createElement(
                            "span",
                            { className: "title" },
                            "Extras"
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Elevators"
                            ),
                            " ",
                            _react2.default.createElement("input", { name: "elevator", value: "elevator", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Swiming Pool"
                            ),
                            " ",
                            _react2.default.createElement("input", { name: "swiming_pool", value: "swiming_pool", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Finished Basement"
                            ),
                            " ",
                            _react2.default.createElement("input", { name: "finished_basement", value: "finished_basement", type: "checkbox", onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            "label",
                            { "for": "extras" },
                            _react2.default.createElement(
                                "span",
                                null,
                                "Gym"
                            ),
                            " ",
                            _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.change })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' LOGO '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'matt'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any of our listings";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-img' },
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Bob Tim'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '10/10/2090'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.floorSpace,
                        ' Ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker-alt', 'aria-hidden': 'true' }),
                ' ',
                listing.city,
                ', ',
                listing.state,
                ' '
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);