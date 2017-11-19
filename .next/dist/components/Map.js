'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Map.js';


var Map = function (_React$Component) {
  (0, _inherits3.default)(Map, _React$Component);

  function Map() {
    (0, _classCallCheck3.default)(this, Map);

    return (0, _possibleConstructorReturn3.default)(this, (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).apply(this, arguments));
  }

  (0, _createClass3.default)(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var size = this.props.size;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      window.scrollTo(size * 50 - innerWidth / 2, size * 50 - innerHeight / 2);
    }
  }, {
    key: 'render',
    value: function render() {
      var size = this.props.size;

      return _react2.default.createElement('div', { style: { width: size * 100, height: size * 100, background: '#F3EBE9' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, [].concat((0, _toConsumableArray3.default)(Array(Math.pow(size, 2)))).map(function (e, i) {
        return _react2.default.createElement('div', { key: i, style: { width: 100, height: 100, float: 'left', background: i % 2 ? '#D4DBE4' : '#DCE2E9' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        });
      }));
    }
  }]);

  return Map;
}(_react2.default.Component);

module.exports = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFwIiwic2l6ZSIsInByb3BzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJBcnJheSIsIk1hdGgiLCJwb3ciLCJtYXAiLCJlIiwiaSIsImZsb2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRVY7Ozs7Ozs7Ozs7O3dDQUNpQjtVQUFBLEFBQ1gsT0FBUyxLQURFLEFBQ0csTUFESCxBQUNYO29CQURXLEFBRWlCO1VBRmpCLEFBRVgscUJBRlcsQUFFWDtVQUZXLEFBRUMsc0JBRkQsQUFFQyxBQUNwQjs7YUFBQSxBQUFPLFNBQ0wsT0FBQSxBQUFPLEtBQUssYUFEZCxBQUMyQixHQUN6QixPQUFBLEFBQU8sS0FBSyxjQUZkLEFBRTRCLEFBRTdCOzs7OzZCQUNTO1VBQUEsQUFDQSxPQUFTLEtBRFQsQUFDYyxNQURkLEFBQ0EsQUFDUjs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBQyxPQUFPLE9BQVIsQUFBZSxLQUFLLFFBQVEsT0FBNUIsQUFBbUMsS0FBSyxZQUFwRCxBQUFZLEFBQW9EO29CQUFoRTtzQkFBQSxBQUNHO0FBREg7T0FBQSw2Q0FDTyxNQUFNLEtBQUEsQUFBSyxJQUFMLEFBQVMsTUFBbkIsQUFBSSxBQUFNLEFBQWUsTUFBekIsQUFBOEIsSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQU0sQUFDM0M7c0RBQVksS0FBTCxBQUFVLEdBQUcsT0FBTyxFQUFDLE9BQUQsQUFBUSxLQUFLLFFBQWIsQUFBcUIsS0FBSyxPQUExQixBQUFpQyxRQUFRLFlBQVksSUFBQSxBQUFJLElBQUosQUFBUSxZQUFqRixBQUFvQixBQUF5RTtzQkFBN0Y7d0JBQVAsQUFBTyxBQUNSO0FBRFE7U0FBQTtBQUhiLEFBQ0UsQUFDRyxBQUtOOzs7OztFQWxCZSxnQixBQUFNOztBQXFCeEIsT0FBQSxBQUFPLFVBQVAsQUFBaUIiLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=