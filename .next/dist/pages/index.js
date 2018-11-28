'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAP_SIZE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Map = require('../components/Map');

var _Map2 = _interopRequireDefault(_Map);

var _NPC = require('../components/NPC');

var _NPC2 = _interopRequireDefault(_NPC);

var _Prize = require('../components/Prize');

var _Prize2 = _interopRequireDefault(_Prize);

var _Rock = require('../components/Rock');

var _Rock2 = _interopRequireDefault(_Rock);

var _constants = require('../components/constants');

var _utils = require('../components/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/pages/index.js?entry';
var MAP_SIZE = exports.MAP_SIZE = 39;

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  (0, _createClass3.default)(App, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());

      return { isServer: isServer };
    }
  }]);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      map: (0, _utils.generateMap)(MAP_SIZE),
      score: 0
    };

    _this.flipTiles = _this.flipTiles.bind(_this);
    _this.updateScore = _this.updateScore.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nextMap = (0, _from2.default)(this.state.map);

      var blockedTiles = [].concat((0, _toConsumableArray3.default)(_constants.NPCS), (0, _toConsumableArray3.default)(_constants.WATER));

      blockedTiles.forEach(function (_ref2) {
        var spawn = _ref2.spawn;

        nextMap[spawn.top][spawn.left] = 0;
      });

      this.setState({
        map: nextMap
      });

      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'flipTiles',
    value: function flipTiles(blockTiles, clearTiles) {
      // Perhaps these args should be arrays...
      var nextMap = [].concat((0, _toConsumableArray3.default)(this.state.map));
      if (blockTiles) nextMap[blockTiles.top][blockTiles.left] = 0;
      if (clearTiles) nextMap[clearTiles.top][clearTiles.left] = 1;

      this.setState({
        map: nextMap
      });
    }
  }, {
    key: 'updateScore',
    value: function updateScore() {
      this.setState({ score: this.state.score + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var map = this.state.map;
      // Ideas...
      // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
      // For now, maybe have them change color depending on feelings...
      // Speech bubbles appearing when chars recognize they're near each other
      // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night

      // Should go in Redux so that objects can dictate which tiles are blocked

      // Add react-helmet (Next version?)

      return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './static/reset.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), _constants.NPCS.map(function (_ref3) {
        var key = _ref3.key,
            spawn = _ref3.spawn;
        return _react2.default.createElement(_NPC2.default, {
          flipTiles: _this2.flipTiles,
          key: key,
          map: map,
          spawn: spawn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        });
      }), _constants.ROCKS.map(function (_ref4) {
        var spawn = _ref4.spawn;
        return _react2.default.createElement(_Rock2.default, {
          flipTiles: _this2.flipTiles,
          key: spawn.top + '_' + spawn.left,
          spawn: spawn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        });
      }), _react2.default.createElement('a', { href: '/room', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_Rock2.default, {
        flipTiles: this.flipTiles,
        spawn: { left: 6, top: 6 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), _react2.default.createElement(_Prize2.default, {
        flipTiles: this.flipTiles,
        map: map,
        updateScore: this.updateScore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_Map2.default, { map: map, water: _constants.WATER, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_store.startClock, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJhZGRDb3VudCIsInNlcnZlclJlbmRlckNsb2NrIiwid2l0aFJlZHV4IiwiTWFwIiwiTlBDIiwiUHJpemUiLCJSb2NrIiwiTlBDUyIsIlJPQ0tTIiwiV0FURVIiLCJnZW5lcmF0ZU1hcCIsIk1BUF9TSVpFIiwiQXBwIiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwicHJvcHMiLCJzdGF0ZSIsIm1hcCIsInNjb3JlIiwiZmxpcFRpbGVzIiwiYmluZCIsInVwZGF0ZVNjb3JlIiwibmV4dE1hcCIsImJsb2NrZWRUaWxlcyIsImZvckVhY2giLCJzcGF3biIsInRvcCIsImxlZnQiLCJzZXRTdGF0ZSIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImJsb2NrVGlsZXMiLCJjbGVhclRpbGVzIiwicG9zaXRpb24iLCJrZXkiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFZLEFBQVUsQUFBeUI7O0FBQ25FLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFFakIsQUFBUyxBQUFNLEFBQU8sQUFBYTs7QUFDbkMsQUFBUyxBQUFtQixBQUU1Qjs7Ozs7QUFBTyxJQUFNLDhCQUFOLEFBQWlCOztJQUVsQixBOzs7OzswQ0FDeUM7VUFBbkIsQUFBbUIsYUFBbkIsQUFBbUI7VUFBWixBQUFZLGdCQUFaLEFBQVksQUFDM0M7O1lBQUEsQUFBTSxTQUFTLDhCQUFmLEFBQWUsQUFBa0IsQUFDakM7WUFBQSxBQUFNLFNBQU4sQUFBZSxBQUVmOzthQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7QUFFRDs7O2VBQUEsQUFBYSxPQUFPO3dDQUFBOztnSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSztXQUNFLHdCQURNLEFBQ04sQUFBWSxBQUNqQjthQUZGLEFBQWEsQUFFSixBQUdUO0FBTGEsQUFDWDs7VUFJRixBQUFLLFlBQVksTUFBQSxBQUFLLFVBQUwsQUFBZSxLQUFoQyxBQUNBO1VBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBVGxCLEFBU2xCO1dBQ0Q7Ozs7O3dDQUVvQixBQUNuQjtVQUFNLFVBQVUsb0JBQVcsS0FBQSxBQUFLLE1BQWhDLEFBQWdCLEFBQXNCLEFBRXRDOztVQUFNLHlCQUFBLEFBQW1CLG1EQUF6QixBQUFNLEFBQTRCLEFBRWxDOzttQkFBQSxBQUFhLFFBQVEsaUJBQWU7WUFBWixBQUFZLGNBQVosQUFBWSxBQUNsQzs7Z0JBQVEsTUFBUixBQUFjLEtBQUssTUFBbkIsQUFBeUIsUUFBekIsQUFBaUMsQUFDbEM7QUFGRCxBQUlBOztXQUFBLEFBQUs7YUFBTCxBQUFjLEFBQ1AsQUFHUDtBQUpjLEFBQ1o7O1dBR0YsQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFsQixBQUFhLEFBQVcsQUFDekI7Ozs7MkNBRXVCLEFBQ3RCO29CQUFjLEtBQWQsQUFBbUIsQUFDcEI7Ozs7OEIsQUFFVSxZLEFBQVksWUFBWSxBQUNqQztBQUNBO1VBQU0scURBQWMsS0FBQSxBQUFLLE1BQXpCLEFBQU0sQUFBeUIsQUFDL0I7VUFBQSxBQUFJLFlBQVksUUFBUSxXQUFSLEFBQW1CLEtBQUssV0FBeEIsQUFBbUMsUUFBbkMsQUFBMkMsQUFDM0Q7VUFBQSxBQUFJLFlBQVksUUFBUSxXQUFSLEFBQW1CLEtBQUssV0FBeEIsQUFBbUMsUUFBbkMsQUFBMkMsQUFFM0Q7O1dBQUEsQUFBSzthQUFMLEFBQWMsQUFDUCxBQUVSO0FBSGUsQUFDWjs7OztrQ0FJVyxBQUNiO1dBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQWxDLEFBQWMsQUFBNEIsQUFDM0M7Ozs7NkJBRVM7bUJBQUE7O1VBQUEsQUFDQSxNQUFRLEtBRFIsQUFDYSxNQURiLEFBQ0EsQUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7OzZCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsVUFBZCxBQUFZLEFBQVk7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7b0JBQTVDO3NCQUZKLEFBQ0UsQUFDRSxBQUdEO0FBSEM7MkJBR0QsQUFBSyxJQUFJLGlCQUFBO1lBQUEsQUFBRyxZQUFILEFBQUc7WUFBSCxBQUFRLGNBQVIsQUFBUTsrQkFDaEIsQUFBQztxQkFDWSxPQURiLEFBQ2tCLEFBQ2hCO2VBRkYsQUFFTyxBQUNMO2VBSEYsQUFHTyxBQUNMO2lCQUpGLEFBSVM7O3NCQUpUO3dCQURRLEFBQ1I7QUFBQTtBQUNFLFNBREY7QUFOSixBQUtHLEFBU0EsMkJBQUEsQUFBTSxJQUFJLGlCQUFBO1lBQUEsQUFBRyxjQUFILEFBQUc7K0JBQ1osQUFBQztxQkFDWSxPQURiLEFBQ2tCLEFBQ2hCO2VBQVEsTUFBUixBQUFjLFlBQU8sTUFGdkIsQUFFNkIsQUFDM0I7aUJBSEYsQUFHUzs7c0JBSFQ7d0JBRFMsQUFDVDtBQUFBO0FBQ0UsU0FERjtBQWZKLEFBY0csQUFRRCwwQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO21CQUNZLEtBRGIsQUFDa0IsQUFDaEI7ZUFBTyxFQUFFLE1BQUYsQUFBUSxHQUFHLEtBRnBCLEFBRVMsQUFBZ0I7O29CQUZ6QjtzQkF2QkosQUFzQkUsQUFDRSxBQU1GO0FBTkU7QUFDRSwyQkFLSixBQUFDO21CQUNZLEtBRGIsQUFDa0IsQUFDaEI7YUFGRixBQUVPLEFBQ0w7cUJBQWEsS0FIZixBQUdvQjs7b0JBSHBCO3NCQTdCRixBQTZCRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDLCtCQUFJLEtBQUwsQUFBVSxLQUFWLEFBQWUsQUFBTztvQkFBdEI7c0JBcENKLEFBQ0UsQUFtQ0UsQUFHTDtBQUhLOzs7Ozs7QSxBQXZHVTs7QUE2R2xCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2dCQUFZLEFBQW1CLGtEQUZqQyxBQUFPLEFBRU8sQUFBK0IsQUFFOUM7QUFKUSxBQUNMO0FBRkosQUFPQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixNQUFyQixBQUEyQixvQkFBMUMsQUFBZSxBQUErQyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWtuZXBwcmF0aC9HaXRIdWIvb3Blbi13b3JsZCJ9