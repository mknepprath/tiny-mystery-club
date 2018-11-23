'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/pages/index.js?entry';


var MAP_SIZE = 39;

var npcs = [{ key: 'a' }, { key: 'b', spawn: { top: 2, left: 3 } }, { key: 'c', spawn: { top: 4, left: 9 } }, { key: 'd', spawn: { top: 10, left: 30 } }, { key: 'e', spawn: { top: 19, left: 18 } }, { key: 'f', spawn: { top: 20, left: 23 } }, { key: 'g', spawn: { top: 22, left: 16 } }, { key: 'h', spawn: { top: 22, left: 36 } }, { key: 'i', spawn: { top: 29, left: 14 } }, { key: 'j', spawn: { top: 30, left: 10 } }, { key: 'k', spawn: { top: 34, left: 33 } }];

var rocks = [{ top: 0, left: 0 }, { top: 2, left: 5 }, { top: 19, left: 20 }, { top: 20, left: 18 }, { top: 20, left: 22 }, { top: 21, left: 19 }, { top: 21, left: 22 }, { top: 23, left: 20 }, { top: 38, left: 38 }];

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

    var row = [];
    var map = [];

    for (var i = 0; i < MAP_SIZE; i++) {
      row[i] = 0;
    }

    for (var _i = 0; _i < MAP_SIZE; _i++) {
      map[_i] = [].concat(row);
    }

    _this.state = {
      map: map,
      score: 0
    };

    _this.blockTile = _this.blockTile.bind(_this);
    _this.updateScore = _this.updateScore.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = '0 trophies';

      var nextMap = (0, _from2.default)(this.state.map);

      rocks.forEach(function (spawn) {
        nextMap[spawn.top][spawn.left] = 1;
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
    key: 'blockTile',
    value: function blockTile(left, top) {
      var nextMap = (0, _from2.default)(this.state.map);
      nextMap[top][left] = 1;

      this.setState({
        map: nextMap
      });
    }
  }, {
    key: 'updateScore',
    value: function updateScore() {
      var nextScore = this.state.score + 1;

      this.setState({ score: nextScore });
    }
  }, {
    key: 'render',
    value: function render() {
      var map = this.state.map;
      // Ideas...
      // Create a matrix for the map that is updated with positions "AI" can use to detect nearby objects etc
      // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
      // For now, maybe have them change color depending on feelings...
      // Speech bubbles appearing when chars recognize they're near each other
      // Perhaps position should always be set with the matrix position - then x100 to absolute position
      // Would make things a lot easier to have a '0' row/col in the map grid
      // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night

      // Should go in Redux so that objects can dictate which tiles are blocked

      // Add react-helmet (Next version?)

      return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './static/reset.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), npcs.map(function (_ref2) {
        var key = _ref2.key,
            spawn = _ref2.spawn;
        return _react2.default.createElement(_NPC2.default, {
          key: key,
          map: map,
          mapSize: MAP_SIZE,
          spawn: spawn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        });
      }), rocks.map(function (spawn) {
        return _react2.default.createElement(_Rock2.default, (0, _extends3.default)({ key: spawn.top + '_' + spawn.left }, spawn, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }));
      }), _react2.default.createElement(_Prize2.default, {
        blockTile: this.blockTile,
        mapSize: MAP_SIZE,
        updateScore: this.updateScore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_Map2.default, { map: map, size: MAP_SIZE, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJhZGRDb3VudCIsInNlcnZlclJlbmRlckNsb2NrIiwid2l0aFJlZHV4IiwiTWFwIiwiTlBDIiwiUHJpemUiLCJSb2NrIiwiTUFQX1NJWkUiLCJucGNzIiwia2V5Iiwic3Bhd24iLCJ0b3AiLCJsZWZ0Iiwicm9ja3MiLCJBcHAiLCJzdG9yZSIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJwcm9wcyIsInJvdyIsIm1hcCIsImkiLCJzdGF0ZSIsInNjb3JlIiwiYmxvY2tUaWxlIiwiYmluZCIsInVwZGF0ZVNjb3JlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsIm5leHRNYXAiLCJmb3JFYWNoIiwic2V0U3RhdGUiLCJ0aW1lciIsImNsZWFySW50ZXJ2YWwiLCJuZXh0U2NvcmUiLCJwb3NpdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVcsQUFBWSxBQUFVLEFBQXlCOztBQUNuRSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxXQUFOLEFBQWlCOztBQUVqQixJQUFNLE9BQU8sQ0FDWCxFQUFFLEtBRFMsQUFDWCxBQUFPLE9BQ1AsRUFBRSxLQUFGLEFBQU8sS0FBSyxPQUFPLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFGbEIsQUFFWCxBQUFtQixBQUFnQixPQUNuQyxFQUFFLEtBQUYsQUFBTyxLQUFLLE9BQU8sRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUhsQixBQUdYLEFBQW1CLEFBQWdC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QyxBQUE2Qzs7c0JBQTdDO3dCQURTLEFBQ1Q7QUFBQTtBQUFBLFVBQUE7QUFmSixBQWNHLEFBSUQsMEJBQUEsQUFBQzttQkFDWSxLQURiLEFBQ2tCLEFBQ2hCO2lCQUZGLEFBRVcsQUFDVDtxQkFBYSxLQUhmLEFBR29COztvQkFIcEI7c0JBbEJGLEFBa0JFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUMsK0JBQUksS0FBTCxBQUFVLEtBQUssTUFBZixBQUFxQjtvQkFBckI7c0JBekJKLEFBQ0UsQUF3QkUsQUFHTDtBQUhLOzs7Ozs7QUExR1UsQTs7QUFnSGxCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztnQkFBWSxBQUFtQixrREFGakMsQUFBTyxBQUVPLEFBQStCLEFBRTlDO0FBSlEsQUFDTDtBQUZKLEFBT0E7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsTUFBckIsQUFBMkIsb0JBQTFDLEFBQWUsQUFBK0MiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==