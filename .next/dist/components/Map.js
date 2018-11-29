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


// When not debugging, this can be React.PureComponent...

var Map = function (_React$Component) {
  (0, _inherits3.default)(Map, _React$Component);

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
          lineNumber: 59
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
            lineNumber: 71
          }
        }, top + 'x' + left + ', ' + dex);
      }));
    }
  }]);

  return Map;
}(_react2.default.Component);

exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29vcmRzVG9JbmRleCIsImluZGV4VG9Db29yZHMiLCJNYXAiLCJwcm9wcyIsImJhY2tncm91bmRJZHMiLCJBcnJheSIsIk1hdGgiLCJwb3ciLCJtYXAiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kSWQiLCJiZ0xvdHRlcnkiLCJmbG9vciIsInJhbmRvbSIsIndhdGVyIiwiZm9yRWFjaCIsInNwYXduIiwiaW5kZXgiLCJzdGF0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImRleCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUyxBQUFlLEFBQXFCOzs7Ozs7O0FBRTdDOztJQUNNLEE7K0JBQ0o7O2VBQUEsQUFBYSxPQUFPO3dDQUFBOztnSUFBQSxBQUNaLEFBRU47O1FBQU0sMkRBQW9CLE1BQU0sS0FBQSxBQUFLLElBQUksTUFBQSxBQUFNLElBQWYsQUFBbUIsUUFBN0IsQUFBSSxBQUFNLEFBQTJCLE1BQXJDLEFBQTBDLElBQUksWUFBTSxBQUN4RTtVQUFJLGVBQUosQUFBbUIsQUFFbkI7O0FBQ0E7VUFBTSxZQUFZLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFsQyxBQUFrQixBQUEyQixBQUU3Qzs7VUFBSSxZQUFKLEFBQWdCLEdBQUcsQUFDakI7dUJBQUEsQUFBZSxBQUNoQjtBQUZELGlCQUVXLFlBQUosQUFBZ0IsR0FBRyxBQUN4Qjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxVQUVJLFlBQUosQUFBZ0IsSUFBSSxBQUN6Qjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxVQUVJLFlBQUosQUFBZ0IsS0FBSyxBQUMxQjt1QkFBQSxBQUFlLEFBQ2hCO0FBRk0sT0FBQSxNQUVBLElBQUksWUFBSixBQUFnQixLQUFLLEFBQzFCO3VCQUFBLEFBQWUsQUFDaEI7QUFFRDs7YUFBQSxBQUFPLEFBQ1I7QUFuQkQsQUFBc0IsQUFxQnRCLEtBckJzQjs7UUFxQmxCLE1BQUosQUFBVSxPQUFPLEFBQ2Y7WUFBQSxBQUFNLE1BQU4sQUFBWSxRQUFRLGdCQUFlO1lBQVosQUFBWSxhQUFaLEFBQVksQUFDakM7O1lBQU0sUUFBUSwwQkFBQSxBQUFjLE9BQU8sTUFBQSxBQUFNLElBQXpDLEFBQWMsQUFBK0IsQUFDN0M7c0JBQUEsQUFBYyxTQUFkLEFBQXVCLEFBQ3hCO0FBSEQsQUFJRDtBQUVEOztVQUFBLEFBQUs7cUJBL0JhLEFBK0JsQixBQUFhO0FBQUEsQUFDWDtXQUVIOzs7Ozt3Q0FFb0IsQUFDbkI7QUFEbUI7VUFBQSxBQUVYLE1BQVEsS0FGRyxBQUVFLE1BRkYsQUFFWDtvQkFGVyxBQUlpQjtVQUpqQixBQUlYLHFCQUpXLEFBSVg7VUFKVyxBQUlDLHNCQUpELEFBSUMsQUFFcEI7O2FBQUEsQUFBTyxTQUNMLENBQUMsSUFBQSxBQUFJLFNBQUosQUFBYSxNQUFkLEFBQW9CLGNBRHRCLEFBQ29DLEdBQ2xDLENBQUMsSUFBQSxBQUFJLFNBQUosQUFBYSxNQUFkLEFBQW9CLGVBRnRCLEFBRXFDLEFBRXRDOzs7OzZCQUVTO1VBQUEsQUFDQSxNQUFRLEtBRFIsQUFDYSxNQURiLEFBQ0EsQUFFUjs7NkJBQ0UsY0FBQTs7K0JBQ1MsQUFDZ0IsQUFDckI7bUJBRkssQUFFSSxBQUNUO2tCQUFRLElBQUEsQUFBSSxTQUhQLEFBR2dCLEFBQ3JCO2lCQUFPLElBQUEsQUFBSSxTQUxmLEFBQ1MsQUFJZTtBQUpmLEFBQ0w7O29CQUZKO3NCQUFBLEFBUUc7QUFSSDtBQUNFLE9BREYsT0FRRyxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLElBQUksVUFBQSxBQUFDLGNBQUQsQUFBZSxLQUFROzZCQUM3QiwwQkFBQSxBQUFjLEtBQUssSUFEVSxBQUM3QixBQUF1QjtZQURNLEFBQzNDLHNCQUQyQyxBQUMzQztZQUQyQyxBQUNyQyxxQkFEcUMsQUFDckMsQUFFZDs7K0JBQ0UsY0FBQTtlQUNFLEFBQVEsWUFEVixBQUNpQixBQUNmOzttREFDRSxBQUFvQyxlQUQvQixBQUVMO0FBQ0E7bUJBQU8sSUFBQSxBQUFJLEtBQUosQUFBUyxVQUFULEFBQW1CLElBQW5CLEFBQXVCLFFBSHpCLEFBR2lDLEFBQ3RDO3dCQUpLLEFBSU8sQUFDWjtzQkFMSyxBQUtLLEFBQ1Y7d0JBUkosQUFFUyxBQU1PO0FBTlAsQUFDTDs7c0JBSEo7d0JBQUEsQUFXSTtBQVhKO0FBQ0UsU0FERixFQUFBLFlBQUEsQUFXVyxjQVpiLEFBQ0UsQUFXb0IsQUFHdkI7QUEzQkwsQUFDRSxBQVFHLEFBcUJOOzs7OztFQWxGZSxnQkFBTSxBLEFBcUZ4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJNYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==