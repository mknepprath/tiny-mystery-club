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
          lineNumber: 50
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
            lineNumber: 63
          }
        });
      }));
    }
  }]);

  return Map;
}(_react.PureComponent);

exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlpfQkxPQ0siLCJNYXAiLCJwcm9wcyIsImJhY2tncm91bmRJZHMiLCJBcnJheSIsIk1hdGgiLCJwb3ciLCJzaXplIiwibWFwIiwiYmdMb3R0ZXJ5IiwiZmxvb3IiLCJyYW5kb20iLCJiYWNrZ3JvdW5kSWQiLCJzdGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImRleCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7OztJLEFBRUg7K0JBQ0o7O2VBQUEsQUFBYSxPQUFPO3dDQUFBOztnSUFBQSxBQUNaLEFBRU47O1FBQU0sMkRBQW9CLE1BQU0sS0FBQSxBQUFLLElBQUksTUFBVCxBQUFlLE1BQXpCLEFBQUksQUFBTSxBQUFxQixNQUEvQixBQUFvQyxJQUFJLFlBQU0sQUFDbEU7QUFDQTtVQUFNLFlBQVksS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQWxDLEFBQWtCLEFBQTJCLEFBRTdDOztVQUFJLGVBQUosQUFBbUIsQUFFbkI7O1VBQUksWUFBSixBQUFnQixHQUFHLEFBQ2pCO3VCQUFBLEFBQWUsQUFDaEI7QUFGRCxpQkFFVyxZQUFKLEFBQWdCLEdBQUcsQUFDeEI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsVUFFSSxZQUFKLEFBQWdCLElBQUksQUFDekI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsVUFFSSxZQUFKLEFBQWdCLEtBQUssQUFDMUI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsTUFFQSxJQUFJLFlBQUosQUFBZ0IsS0FBSyxBQUMxQjt1QkFBQSxBQUFlLEFBQ2hCO0FBRUQ7O2FBQUEsQUFBTyxBQUNSO0FBbkJELEFBQXNCLEFBcUJ0QixLQXJCc0I7O1VBcUJ0QixBQUFLO3FCQXhCYSxBQXdCbEIsQUFBYTtBQUFBLEFBQ1g7V0FFSDs7Ozs7d0NBRW9CLEFBQ25CO0FBRG1CO1VBQUEsQUFFWCxPQUFTLEtBRkUsQUFFRyxNQUZILEFBRVg7b0JBRlcsQUFJaUI7VUFKakIsQUFJWCxxQkFKVyxBQUlYO1VBSlcsQUFJQyxzQkFKRCxBQUlDLEFBRXBCOzthQUFBLEFBQU8sU0FDTCxDQUFDLE9BQUEsQUFBTyxNQUFSLEFBQWMsY0FEaEIsQUFDOEIsR0FDNUIsQ0FBQyxPQUFBLEFBQU8sTUFBUixBQUFjLGVBRmhCLEFBRStCLEFBRWhDOzs7OzZCQUVTO21CQUNjLEtBRGQsQUFDbUI7VUFEbkIsQUFDQSxhQURBLEFBQ0E7VUFEQSxBQUNLLGNBREwsQUFDSyxBQUViOzs2QkFDRSxjQUFBOzsrQkFDUyxBQUNnQixBQUNyQjttQkFGSyxBQUVJLEFBQ1Q7a0JBQVEsT0FISCxBQUdVLEFBQ2Y7aUJBQU8sT0FMWCxBQUNTLEFBSVM7QUFKVCxBQUNMOztvQkFGSjtzQkFBQSxBQVFHO0FBUkg7QUFDRSxPQURGLE9BUUcsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixJQUFJLFVBQUEsQUFBQyxjQUFELEFBQWUsS0FBUSxBQUNuRDtZQUFNLE1BQU0sS0FBQSxBQUFLLE1BQU0sTUFBdkIsQUFBWSxBQUFpQixBQUM3QjtZQUFNLE9BQVEsTUFBZCxBQUFvQixBQUVwQjs7O2VBRUksQUFBUSxZQURWLEFBQ2lCLEFBQ2Y7O3dEQUNFLEFBQXlDLGVBRHBDLEFBRUw7b0JBQVEsSUFBQSxBQUFJLEtBQUosQUFBUyxRQUFULEFBQWlCLGtCQUo3QixBQUVTLEFBRXNDO0FBRnRDLEFBQ0w7O3NCQUhKO3dCQURGLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsU0FERjtBQWRSLEFBQ0UsQUFRRyxBQWdCTjs7Ozs7QUF0RWUsQSxBQXlFbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=