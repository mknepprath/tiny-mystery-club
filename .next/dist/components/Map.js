'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _zlib = require('zlib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Map.js';


var Map = function (_Component) {
  (0, _inherits3.default)(Map, _Component);

  function Map() {
    (0, _classCallCheck3.default)(this, Map);

    return (0, _possibleConstructorReturn3.default)(this, (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).apply(this, arguments));
  }

  (0, _createClass3.default)(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Once mounted, scroll to center of map.
      var size = this.props.size;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      window.scrollTo((size * 100 - innerWidth) / 2, (size * 100 - innerHeight) / 2);
    }
  }, {
    key: 'render',
    value: function render() {
      var size = this.props.size;

      return _react2.default.createElement('div', {
        style: {
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: size * 100,
          width: size * 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, [].concat((0, _toConsumableArray3.default)(Array(Math.pow(size, 2)))).map(function (s, dex) {
        var bgLottery = Math.floor(Math.random() * 299);
        var bgIndex = 1;
        if (bgLottery < 1) {
          bgIndex = 2;
        } else if (bgLottery < 2) {
          bgIndex = 5;
        } else if (bgLottery < 79) {
          bgIndex = 3;
        } else if (bgLottery < 159) {
          bgIndex = 4;
        } else if (bgLottery < 229) {
          bgIndex = 6;
        }

        return _react2.default.createElement('div', {
          key: dex + '_' + bgIndex,
          style: { background: 'url(\'./static/assets/grass' + bgIndex + '.png\')' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      }));
    }
  }]);

  return Map;
}(_react.Component);

exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiWl9CTE9DSyIsIk1hcCIsInNpemUiLCJwcm9wcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsIkFycmF5IiwiTWF0aCIsInBvdyIsIm1hcCIsInMiLCJkZXgiLCJiZ0xvdHRlcnkiLCJmbG9vciIsInJhbmRvbSIsImJnSW5kZXgiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7O3dDQUNpQixBQUNuQjtBQURtQjtVQUFBLEFBRVgsT0FBUyxLQUZFLEFBRUcsTUFGSCxBQUVYO29CQUZXLEFBSWlCO1VBSmpCLEFBSVgscUJBSlcsQUFJWDtVQUpXLEFBSUMsc0JBSkQsQUFJQyxBQUVwQjs7YUFBQSxBQUFPLFNBQ0wsQ0FBQyxPQUFBLEFBQU8sTUFBUixBQUFjLGNBRGhCLEFBQzhCLEdBQzVCLENBQUMsT0FBQSxBQUFPLE1BQVIsQUFBYyxlQUZoQixBQUUrQixBQUVoQzs7Ozs2QkFDUztVQUFBLEFBQ0EsT0FBUyxLQURULEFBQ2MsTUFEZCxBQUNBLEFBRVI7OzZCQUNFLGNBQUE7OytCQUNTLEFBQ2dCLEFBQ3JCO21CQUZLLEFBRUksQUFDVDtrQkFBUSxPQUhILEFBR1UsQUFDZjtpQkFBTyxPQUxYLEFBQ1MsQUFJUztBQUpULEFBQ0w7O29CQUZKO3NCQUFBLEFBUUc7QUFSSDtBQUNFLE9BREYsNkNBUU8sTUFBTSxLQUFBLEFBQUssSUFBTCxBQUFTLE1BQW5CLEFBQUksQUFBTSxBQUFlLE1BQXpCLEFBQThCLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxLQUFRLEFBQzdDO1lBQU0sWUFBWSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBbEMsQUFBa0IsQUFBMkIsQUFDN0M7WUFBSSxVQUFKLEFBQWMsQUFDZDtZQUFJLFlBQUosQUFBZ0IsR0FBRyxBQUNqQjtvQkFBQSxBQUFVLEFBQ1g7QUFGRCxtQkFFVyxZQUFKLEFBQWdCLEdBQUcsQUFDeEI7b0JBQUEsQUFBVSxBQUNYO0FBRk0sU0FBQSxVQUVJLFlBQUosQUFBZ0IsSUFBSSxBQUN6QjtvQkFBQSxBQUFVLEFBQ1g7QUFGTSxTQUFBLFVBRUksWUFBSixBQUFnQixLQUFLLEFBQzFCO29CQUFBLEFBQVUsQUFDWDtBQUZNLFNBQUEsTUFFQSxJQUFJLFlBQUosQUFBZ0IsS0FBSyxBQUMxQjtvQkFBQSxBQUFVLEFBQ1g7QUFFRDs7O2VBRUksQUFBUSxZQURWLEFBQ2lCLEFBQ2Y7aUJBQU8sRUFBRSw0Q0FBQSxBQUF5QyxVQUZwRCxBQUVTOztzQkFGVDt3QkFERixBQUNFLEFBS0g7QUFMRztBQUNFLFNBREY7QUF6QlIsQUFDRSxBQVFHLEFBd0JOOzs7OztBQWhEZSxBLEFBbURsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJNYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==