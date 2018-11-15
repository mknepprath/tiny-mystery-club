'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Map = require('../components/Map');

var _Map2 = _interopRequireDefault(_Map);

var _Char = require('../components/Char');

var _Char2 = _interopRequireDefault(_Char);

var _Rock = require('../components/Rock');

var _Rock2 = _interopRequireDefault(_Rock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/pages/index.js?entry';


var npcs = [{},
// { spawn: { top: 2, left: 3 }, color: '#E1AC6B' },
// { spawn: { top: 4, left: 9 }, color: '#EFE070' },
// { spawn: { top: 10, left: 30 }, color: '#63B0E3' },
// { spawn: { top: 19, left: 18 }, color: '#51A652' },
// { spawn: { top: 20, left: 23 }, color: '#FFFFFF' },
// { spawn: { top: 22, left: 16 }, color: '#B7B8BB' },
// { spawn: { top: 22, left: 36 }, color: '#DB7965' },
// { spawn: { top: 29, left: 14 }, color: '#5D4022' },
// { spawn: { top: 30, left: 10 }, color: '#615990' },
// { spawn: { top: 34, left: 33 }, color: '#D17F9A' },
{ spawn: { top: 2, left: 3 } }, { spawn: { top: 4, left: 9 } }, { spawn: { top: 10, left: 30 } }, { spawn: { top: 19, left: 18 } }, { spawn: { top: 20, left: 23 } }, { spawn: { top: 22, left: 16 } }, { spawn: { top: 22, left: 36 } }, { spawn: { top: 29, left: 14 } }, { spawn: { top: 30, left: 10 } }, { spawn: { top: 34, left: 33 } }];

var rocks = [{ top: 2, left: 5 }, { top: 19, left: 20 }, { top: 20, left: 18 }, { top: 20, left: 22 }, { top: 21, left: 19 }, { top: 21, left: 22 }, { top: 23, left: 20 }];

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      // Ideas...
      // Create a matrix for the map that is updated with positions "AI" can use to detect nearby objects etc
      // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
      // For now, maybe have them change color depending on feelings...
      // Speech bubbles appearing when chars recognize they're near each other
      // Perhaps position should always be set with the matrix position - then x100 to absolute position
      // Would make things a lot easier to have a '0' row/col in the map grid
      // Obscure the map and have parts be more visible due to fireflies lighting things as they move around @ night
      var mapSize = 39;

      var map = [];
      var cols = [].concat((0, _toConsumableArray3.default)(Array(mapSize)));
      cols.forEach(function (h, i) {
        map[i] = new Array(mapSize);
      });

      rocks.forEach(function (spawn) {
        map[spawn.top][spawn.left] = 1;
      });

      return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './static/reset.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), npcs.map(function (_ref) {
        var spawn = _ref.spawn,
            color = _ref.color;
        return _react2.default.createElement(_Char2.default, {
          color: color,
          key: color,
          map: map,
          mapSize: mapSize,
          spawn: spawn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        });
      }), rocks.map(function (spawn) {
        return _react2.default.createElement(_Rock2.default, (0, _extends3.default)({ key: spawn.top + '_' + spawn.left }, spawn, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }));
      }), _react2.default.createElement(_Map2.default, { size: mapSize, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref2) {
      var store = _ref2.store,
          isServer = _ref2.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());

      return { isServer: isServer };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJhZGRDb3VudCIsInNlcnZlclJlbmRlckNsb2NrIiwid2l0aFJlZHV4IiwiTWFwIiwiQ2hhciIsIlJvY2siLCJucGNzIiwic3Bhd24iLCJ0b3AiLCJsZWZ0Iiwicm9ja3MiLCJBcHAiLCJ0aW1lciIsInByb3BzIiwiY2xlYXJJbnRlcnZhbCIsIm1hcFNpemUiLCJtYXAiLCJjb2xzIiwiQXJyYXkiLCJmb3JFYWNoIiwiaCIsImkiLCJwb3NpdGlvbiIsImNvbG9yIiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFZLEFBQVUsQUFBeUI7O0FBQ25FLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sT0FBTyxDQUFBLEFBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxHQUFHLE1BWlIsQUFZWCxBQUFTLEFBQWdCLE9BQ3pCLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxHQUFHLE1BYlIsQUFhWCxBQUFTLEFBQWdCLE9BQ3pCLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxJQUFJLE1BZFQsQUFjWCxBQUFTLEFBQWlCLFFBQzFCLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxJQUFJLE1BZlQsQUFlWCxBQUFTLEFBQWlCLFFBQzFCLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxJQUFJLE1BaEJULEFBZ0JYLEFBQVMsQUFBaUIsUUFDMUIsRUFBRSxPQUFPLEVBQUUsS0FBRixBQUFPLElBQUksTUFqQlQsQUFpQlgsQUFBUyxBQUFpQixRQUMxQixFQUFFLE9BQU8sRUFBRSxLQUFGLEFBQU8sSUFBSSxNQWxCVCxBQWtCWCxBQUFTLEFBQWlCLFFBQzFCLEVBQUUsT0FBTyxFQUFFLEtBQUYsQUFBTyxJQUFJLE1BbkJULEFBbUJYLEFBQVMsQUFBaUIsUUFDMUIsRUFBRSxPQUFPLEVBQUUsS0FBRixBQUFPLElBQUksTUFwQlQsQUFvQlgsQUFBUyxBQUFpQixRQUMxQixFQUFFLE9BQU8sRUFBRSxLQUFGLEFBQU8sSUFBSSxNQXJCdEIsQUFBYSxBQXFCWCxBQUFTLEFBQWlCOztBQUc1QixJQUFNLFFBQVEsQ0FDWixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BREUsQUFDWixBQUFnQixLQUNoQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BRkMsQUFFWixBQUFpQixNQUNqQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BSEMsQUFHWixBQUFpQixNQUNqQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BSkMsQUFJWixBQUFpQixNQUNqQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BTEMsQUFLWixBQUFpQixNQUNqQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BTkMsQUFNWixBQUFpQixNQUNqQixFQUFFLEtBQUYsQUFBTyxJQUFJLE1BUGIsQUFBYyxBQU9aLEFBQWlCOztJLEFBR2I7Ozs7Ozs7Ozs7O3dDQVFpQixBQUNuQjtXQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBbEIsQUFBYSxBQUFXLEFBQ3pCOzs7OzJDQUV1QixBQUN0QjtvQkFBYyxLQUFkLEFBQW1CLEFBQ3BCOzs7OzZCQUVTLEFBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1VBQU0sVUFBTixBQUFnQixBQUVoQjs7VUFBSSxNQUFKLEFBQVUsQUFDVjtVQUFNLGtEQUFXLE1BQWpCLEFBQU0sQUFBVyxBQUFNLEFBQ3ZCO1dBQUEsQUFBSyxRQUFRLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBTSxBQUNyQjtZQUFBLEFBQUksS0FBSyxJQUFBLEFBQUksTUFBYixBQUFTLEFBQVUsQUFDcEI7QUFGRCxBQUlBOztZQUFBLEFBQU0sUUFBUSxpQkFBUyxBQUNyQjtZQUFJLE1BQUosQUFBVSxLQUFLLE1BQWYsQUFBcUIsUUFBckIsQUFBNkIsQUFDOUI7QUFGRCxBQUlBOzs2QkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLFVBQWIsQUFBWSxBQUFXO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixZQUFXLE1BQXZDLEFBQTRDO29CQUE1QztzQkFGSixBQUNFLEFBQ0UsQUFHRDtBQUhDO2dCQUdELEFBQUssSUFBSSxnQkFBQTtZQUFBLEFBQUcsYUFBSCxBQUFHO1lBQUgsQUFBVSxhQUFWLEFBQVU7K0JBQ2xCLEFBQUM7aUJBQUQsQUFDUyxBQUNQO2VBRkYsQUFFTyxBQUNMO2VBSEYsQUFHTyxBQUNMO21CQUpGLEFBSVcsQUFDVDtpQkFMRixBQUtTOztzQkFMVDt3QkFEUSxBQUNSO0FBQUE7QUFDRSxTQURGO0FBTkosQUFLRyxBQVVBLGdCQUFBLEFBQU0sSUFBSSxpQkFBQTsrQkFDVCxBQUFDLHVEQUFLLEtBQVEsTUFBUixBQUFjLFlBQU8sTUFBM0IsQUFBaUMsUUFBakMsQUFBNkM7O3NCQUE3Qzt3QkFEUyxBQUNUO0FBQUE7QUFBQSxVQUFBO0FBaEJKLEFBZUcsQUFJRCwwQkFBQSxBQUFDLCtCQUFJLE1BQUwsQUFBVztvQkFBWDtzQkFwQkosQUFDRSxBQW1CRSxBQUdMO0FBSEs7Ozs7OzJDQXhEdUM7VUFBbkIsQUFBbUIsY0FBbkIsQUFBbUI7VUFBWixBQUFZLGlCQUFaLEFBQVksQUFDM0M7O1lBQUEsQUFBTSxTQUFTLDhCQUFmLEFBQWUsQUFBa0IsQUFDakM7WUFBQSxBQUFNLFNBQU4sQUFBZSxBQUVmOzthQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7Ozs7O0FBTmUsQTs7QUErRGxCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztnQkFBWSxBQUFtQixrREFGakMsQUFBTyxBQUVPLEFBQStCLEFBRTlDO0FBSlEsQUFDTDtBQUZKLEFBT0E7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsTUFBckIsQUFBMkIsb0JBQTFDLEFBQWUsQUFBK0MiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==