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

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Map.js';


var Map = function (_React$PureComponent) {
  (0, _inherits3.default)(Map, _React$PureComponent);

  function Map(props) {
    (0, _classCallCheck3.default)(this, Map);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call(this, props));

    var backgroundIds = [].concat((0, _toConsumableArray3.default)(Array(Math.pow(props.map.length, 2)))).map(function () {
      var backgroundId = 'grass1.png';

      // Randomize grass tiles
      var bgLottery = Math.floor(Math.random() * 299);

      if (bgLottery < 1) {
        backgroundId = 'grass2.png';
      } else if (bgLottery < 2) {
        backgroundId = 'grass5.png';
      } else if (bgLottery < 79) {
        backgroundId = 'grass3.png';
      } else if (bgLottery < 159) {
        backgroundId = 'grass4.png';
      } else if (bgLottery < 229) {
        backgroundId = 'grass6.png';
      }

      return backgroundId;
    });

    if (props.water) {
      props.water.forEach(function (_ref) {
        var spawn = _ref.spawn;

        var index = (0, _utils.coordsToIndex)(spawn, props.map.length);
        backgroundIds[index] = 'water.gif';
      });
    }

    _this.state = {
      backgroundIds: backgroundIds
    };
    return _this;
  }

  (0, _createClass3.default)(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Once mounted, scroll to center of map.
      var map = this.props.map;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      window.scrollTo((map.length * 100 - innerWidth) / 2, (map.length * 100 - innerHeight) / 2);
    }
  }, {
    key: 'render',
    value: function render() {
      var map = this.props.map;

      return _react2.default.createElement('div', {
        style: {
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          display: 'grid',
          height: map.length * 100,
          width: map.length * 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.state.backgroundIds.map(function (backgroundId, dex) {
        var _indexToCoords = (0, _utils.indexToCoords)(dex, map.length),
            left = _indexToCoords.left,
            top = _indexToCoords.top;

        return _react2.default.createElement('div', {
          key: dex + '_' + backgroundId,
          style: {
            background: 'url(\'./static/assets/' + backgroundId + '\')',
            // Below styles necessary for tile printout.
            color: map[top][left] === 0 ? 'red' : '#318967',
            fontFamily: 'sans-serif',
            fontSize: 11,
            fontWeight: 'bold'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, left + 'x' + top + ', ' + dex);
      }));
    }
  }]);

  return Map;
}(_react2.default.PureComponent);

exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29vcmRzVG9JbmRleCIsImluZGV4VG9Db29yZHMiLCJNYXAiLCJwcm9wcyIsImJhY2tncm91bmRJZHMiLCJBcnJheSIsIk1hdGgiLCJwb3ciLCJtYXAiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kSWQiLCJiZ0xvdHRlcnkiLCJmbG9vciIsInJhbmRvbSIsIndhdGVyIiwiZm9yRWFjaCIsInNwYXduIiwiaW5kZXgiLCJzdGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImRleCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVMsQUFBZSxBQUFxQjs7Ozs7OztJQUV2QyxBOytCQUNKOztlQUFBLEFBQWEsT0FBTzt3Q0FBQTs7Z0lBQUEsQUFDWixBQUVOOztRQUFNLDJEQUFvQixNQUFNLEtBQUEsQUFBSyxJQUFJLE1BQUEsQUFBTSxJQUFmLEFBQW1CLFFBQTdCLEFBQUksQUFBTSxBQUEyQixNQUFyQyxBQUEwQyxJQUFJLFlBQU0sQUFDeEU7VUFBSSxlQUFKLEFBQW1CLEFBRW5COztBQUNBO1VBQU0sWUFBWSxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBbEMsQUFBa0IsQUFBMkIsQUFFN0M7O1VBQUksWUFBSixBQUFnQixHQUFHLEFBQ2pCO3VCQUFBLEFBQWUsQUFDaEI7QUFGRCxpQkFFVyxZQUFKLEFBQWdCLEdBQUcsQUFDeEI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsVUFFSSxZQUFKLEFBQWdCLElBQUksQUFDekI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsVUFFSSxZQUFKLEFBQWdCLEtBQUssQUFDMUI7dUJBQUEsQUFBZSxBQUNoQjtBQUZNLE9BQUEsTUFFQSxJQUFJLFlBQUosQUFBZ0IsS0FBSyxBQUMxQjt1QkFBQSxBQUFlLEFBQ2hCO0FBRUQ7O2FBQUEsQUFBTyxBQUNSO0FBbkJELEFBQXNCLEFBcUJ0QixLQXJCc0I7O1FBcUJsQixNQUFKLEFBQVUsT0FBTyxBQUNmO1lBQUEsQUFBTSxNQUFOLEFBQVksUUFBUSxnQkFBZTtZQUFaLEFBQVksYUFBWixBQUFZLEFBQ2pDOztZQUFNLFFBQVEsMEJBQUEsQUFBYyxPQUFPLE1BQUEsQUFBTSxJQUF6QyxBQUFjLEFBQStCLEFBQzdDO3NCQUFBLEFBQWMsU0FBZCxBQUF1QixBQUN4QjtBQUhELEFBSUQ7QUFFRDs7VUFBQSxBQUFLO3FCQS9CYSxBQStCbEIsQUFBYTtBQUFBLEFBQ1g7V0FFSDs7Ozs7d0NBRW9CLEFBQ25CO0FBRG1CO1VBQUEsQUFFWCxNQUFRLEtBRkcsQUFFRSxNQUZGLEFBRVg7b0JBRlcsQUFJaUI7VUFKakIsQUFJWCxxQkFKVyxBQUlYO1VBSlcsQUFJQyxzQkFKRCxBQUlDLEFBRXBCOzthQUFBLEFBQU8sU0FDTCxDQUFDLElBQUEsQUFBSSxTQUFKLEFBQWEsTUFBZCxBQUFvQixjQUR0QixBQUNvQyxHQUNsQyxDQUFDLElBQUEsQUFBSSxTQUFKLEFBQWEsTUFBZCxBQUFvQixlQUZ0QixBQUVxQyxBQUV0Qzs7Ozs2QkFFUztVQUFBLEFBQ0EsTUFBUSxLQURSLEFBQ2EsTUFEYixBQUNBLEFBRVI7OzZCQUNFLGNBQUE7OytCQUNTLEFBQ2dCLEFBQ3JCO21CQUZLLEFBRUksQUFDVDtrQkFBUSxJQUFBLEFBQUksU0FIUCxBQUdnQixBQUNyQjtpQkFBTyxJQUFBLEFBQUksU0FMZixBQUNTLEFBSWU7QUFKZixBQUNMOztvQkFGSjtzQkFBQSxBQVFHO0FBUkg7QUFDRSxPQURGLE9BUUcsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixJQUFJLFVBQUEsQUFBQyxjQUFELEFBQWUsS0FBUTs2QkFDN0IsMEJBQUEsQUFBYyxLQUFLLElBRFUsQUFDN0IsQUFBdUI7WUFETSxBQUMzQyxzQkFEMkMsQUFDM0M7WUFEMkMsQUFDckMscUJBRHFDLEFBQ3JDLEFBRWQ7OytCQUNFLGNBQUE7ZUFDRSxBQUFRLFlBRFYsQUFDaUIsQUFDZjs7bURBQ0UsQUFBb0MsZUFEL0IsQUFFTDtBQUNBO21CQUFPLElBQUEsQUFBSSxLQUFKLEFBQVMsVUFBVCxBQUFtQixJQUFuQixBQUF1QixRQUh6QixBQUdpQyxBQUN0Qzt3QkFKSyxBQUlPLEFBQ1o7c0JBTEssQUFLSyxBQUNWO3dCQVJKLEFBRVMsQUFNTztBQU5QLEFBQ0w7O3NCQUhKO3dCQUFBLEFBV0k7QUFYSjtBQUNFLFNBREYsRUFBQSxhQUFBLEFBV1ksYUFaZCxBQUNFLEFBV29CLEFBR3ZCO0FBM0JMLEFBQ0UsQUFRRyxBQXFCTjs7Ozs7RUFsRmUsZ0JBQU0sQSxBQXFGeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=