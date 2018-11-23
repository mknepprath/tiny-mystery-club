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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Map.js';


var Map = function (_PureComponent) {
  (0, _inherits3.default)(Map, _PureComponent);

  function Map(props) {
    (0, _classCallCheck3.default)(this, Map);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call(this, props));

    var backgroundIds = [].concat((0, _toConsumableArray3.default)(Array(Math.pow(props.size, 2)))).map(function () {
      // Randomize grass tiles
      var bgLottery = Math.floor(Math.random() * 299);

      var backgroundId = 1;

      if (bgLottery < 1) {
        backgroundId = 2;
      } else if (bgLottery < 2) {
        backgroundId = 5;
      } else if (bgLottery < 79) {
        backgroundId = 3;
      } else if (bgLottery < 159) {
        backgroundId = 4;
      } else if (bgLottery < 229) {
        backgroundId = 6;
      }

      return backgroundId;
    });

    _this.state = {
      backgroundIds: backgroundIds
    };
    return _this;
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
      var _props = this.props,
          map = _props.map,
          size = _props.size;

      return _react2.default.createElement('div', {
        style: {
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: size * 100,
          width: size * 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.state.backgroundIds.map(function (backgroundId, dex) {
        var top = Math.floor(dex / size);
        var left = dex % size;

        return _react2.default.createElement('div', {
          key: dex + '_' + backgroundId,
          style: {
            background: 'url(\'./static/assets/grass' + backgroundId + '.png\')',
            border: map[top][left] ? '1px solid red' : ''
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      }));
    }
  }]);

  return Map;
}(_react.PureComponent);

exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIk1hcCIsInByb3BzIiwiYmFja2dyb3VuZElkcyIsIkFycmF5IiwiTWF0aCIsInBvdyIsInNpemUiLCJtYXAiLCJiZ0xvdHRlcnkiLCJmbG9vciIsInJhbmRvbSIsImJhY2tncm91bmRJZCIsInN0YXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiZGV4IiwidG9wIiwibGVmdCIsImJhY2tncm91bmQiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFVjsrQkFDSjs7ZUFBQSxBQUFhLE9BQU87d0NBQUE7O2dJQUFBLEFBQ1osQUFFTjs7UUFBTSwyREFBb0IsTUFBTSxLQUFBLEFBQUssSUFBSSxNQUFULEFBQWUsTUFBekIsQUFBSSxBQUFNLEFBQXFCLE1BQS9CLEFBQW9DLElBQUksWUFBTSxBQUNsRTtBQUNBO1VBQU0sWUFBWSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBbEMsQUFBa0IsQUFBMkIsQUFFN0M7O1VBQUksZUFBSixBQUFtQixBQUVuQjs7VUFBSSxZQUFKLEFBQWdCLEdBQUcsQUFDakI7dUJBQUEsQUFBZSxBQUNoQjtBQUZELGlCQUVXLFlBQUosQUFBZ0IsR0FBRyxBQUN4Qjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxVQUVJLFlBQUosQUFBZ0IsSUFBSSxBQUN6Qjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxVQUVJLFlBQUosQUFBZ0IsS0FBSyxBQUMxQjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxNQUVBLElBQUksWUFBSixBQUFnQixLQUFLLEFBQzFCO3VCQUFBLEFBQWUsQUFDaEI7QUFFRDs7YUFBQSxBQUFPLEFBQ1I7QUFuQkQsQUFBc0IsQUFxQnRCLEtBckJzQjs7VUFxQnRCLEFBQUs7cUJBeEJhLEFBd0JsQixBQUFhO0FBQUEsQUFDWDtXQUVIOzs7Ozt3Q0FFb0IsQUFDbkI7QUFEbUI7VUFBQSxBQUVYLE9BQVMsS0FGRSxBQUVHLE1BRkgsQUFFWDtvQkFGVyxBQUlpQjtVQUpqQixBQUlYLHFCQUpXLEFBSVg7VUFKVyxBQUlDLHNCQUpELEFBSUMsQUFFcEI7O2FBQUEsQUFBTyxTQUNMLENBQUMsT0FBQSxBQUFPLE1BQVIsQUFBYyxjQURoQixBQUM4QixHQUM1QixDQUFDLE9BQUEsQUFBTyxNQUFSLEFBQWMsZUFGaEIsQUFFK0IsQUFFaEM7Ozs7NkJBRVM7bUJBQ2MsS0FEZCxBQUNtQjtVQURuQixBQUNBLGFBREEsQUFDQTtVQURBLEFBQ0ssY0FETCxBQUNLLEFBRWI7OzZCQUNFLGNBQUE7OytCQUNTLEFBQ2dCLEFBQ3JCO21CQUZLLEFBRUksQUFDVDtrQkFBUSxPQUhILEFBR1UsQUFDZjtpQkFBTyxPQUxYLEFBQ1MsQUFJUztBQUpULEFBQ0w7O29CQUZKO3NCQUFBLEFBUUc7QUFSSDtBQUNFLE9BREYsT0FRRyxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLElBQUksVUFBQSxBQUFDLGNBQUQsQUFBZSxLQUFRLEFBQ25EO1lBQU0sTUFBTSxLQUFBLEFBQUssTUFBTSxNQUF2QixBQUFZLEFBQWlCLEFBQzdCO1lBQU0sT0FBUSxNQUFkLEFBQW9CLEFBRXBCOzs7ZUFFSSxBQUFRLFlBRFYsQUFDaUIsQUFDZjs7d0RBQ0UsQUFBeUMsZUFEcEMsQUFFTDtvQkFBUSxJQUFBLEFBQUksS0FBSixBQUFTLFFBQVQsQUFBaUIsa0JBSjdCLEFBRVMsQUFFc0M7QUFGdEMsQUFDTDs7c0JBSEo7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBZFIsQUFDRSxBQVFHLEFBZ0JOOzs7OztBQXRFZSxBLEFBeUVsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJNYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==