'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Map = require('../components/Map');

var _Map2 = _interopRequireDefault(_Map);

var _Char = require('../components/Char');

var _Char2 = _interopRequireDefault(_Char);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/pages/index.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
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
      // Create a matrix for hte map that is updated with positions "AI" can use to detect nearby objects etc
      // Each char should have a state that's impacted by what they're near, player can trigger things that affect how they're impacted
      // For now, maybe have them change color depending on feelings...
      // Speech bubbles appearing when chars recognize they're near each other
      // Perhaps position should always be set with the matrix position - then x100 to absolute position
      var mapSize = 39;
      return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: './static/reset.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_Char2.default, { mapSize: mapSize, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 29, left: 14 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 16, left: 29 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 1, left: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 1, left: 16 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 18, left: 10 }, color: '#615990', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_Char2.default, { mapSize: mapSize, spawn: { top: 10, left: 16 }, color: '#63B0E3', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_Map2.default, { size: mapSize, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _store.serverRenderClock)(isServer));
      store.dispatch((0, _store.addCount)());

      return { isServer: isServer };
    }
  }]);

  return Counter;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_store.startClock, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatchToProps)(Counter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsInN0YXJ0Q2xvY2siLCJhZGRDb3VudCIsInNlcnZlclJlbmRlckNsb2NrIiwid2l0aFJlZHV4IiwiUGFnZSIsIk1hcCIsIkNoYXIiLCJDb3VudGVyIiwidGltZXIiLCJwcm9wcyIsImNsZWFySW50ZXJ2YWwiLCJtYXBTaXplIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVcsQUFBWSxBQUFVLEFBQXlCOztBQUNuRSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O3dDQVFpQixBQUNuQjtXQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBbEIsQUFBYSxBQUFXLEFBQ3pCOzs7OzJDQUV1QixBQUN0QjtvQkFBYyxLQUFkLEFBQW1CLEFBQ3BCOzs7OzZCQUVTLEFBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFBTSxVQUFOLEFBQWdCLEFBQ2hCOzZCQUFPLGNBQUEsU0FBSyxPQUFPLEVBQUMsVUFBYixBQUFZLEFBQVc7b0JBQXZCO3NCQUFBLEFBQ0w7QUFESztPQUFBLGtCQUNMLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7b0JBQTVDO3NCQUZHLEFBQ0wsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQyxnQ0FBSyxTQUFOLEFBQWU7b0JBQWY7c0JBSkssQUFJTCxBQUNBO0FBREE7MEJBQ0EsQUFBQyxnQ0FBSyxTQUFOLEFBQWUsU0FBUyxPQUFPLEVBQUMsS0FBRCxBQUFNLElBQUksTUFBekMsQUFBK0IsQUFBZ0I7b0JBQS9DO3NCQUxLLEFBS0wsQUFDQTtBQURBOzBCQUNBLEFBQUMsZ0NBQUssU0FBTixBQUFlLFNBQVMsT0FBTyxFQUFDLEtBQUQsQUFBTSxJQUFJLE1BQXpDLEFBQStCLEFBQWdCO29CQUEvQztzQkFOSyxBQU1MLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdDQUFLLFNBQU4sQUFBZSxTQUFTLE9BQU8sRUFBQyxLQUFELEFBQU0sR0FBRyxNQUF4QyxBQUErQixBQUFlO29CQUE5QztzQkFQSyxBQU9MLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdDQUFLLFNBQU4sQUFBZSxTQUFTLE9BQU8sRUFBQyxLQUFELEFBQU0sR0FBRyxNQUF4QyxBQUErQixBQUFlO29CQUE5QztzQkFSSyxBQVFMLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdDQUFLLFNBQU4sQUFBZSxTQUFTLE9BQU8sRUFBQyxLQUFELEFBQU0sSUFBSSxNQUF6QyxBQUErQixBQUFnQixNQUFLLE9BQXBELEFBQTBEO29CQUExRDtzQkFUSyxBQVNMLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGdDQUFLLFNBQU4sQUFBZSxTQUFTLE9BQU8sRUFBQyxLQUFELEFBQU0sSUFBSSxNQUF6QyxBQUErQixBQUFnQixNQUFLLE9BQXBELEFBQTBEO29CQUExRDtzQkFWSyxBQVVMLEFBRUE7QUFGQTswQkFFQSxBQUFDLCtCQUFJLE1BQUwsQUFBVztvQkFBWDtzQkFaRixBQUFPLEFBWUwsQUFFSDtBQUZHOzs7OzswQ0FuQ3lDO1VBQW5CLEFBQW1CLGFBQW5CLEFBQW1CO1VBQVosQUFBWSxnQkFBWixBQUFZLEFBQzNDOztZQUFBLEFBQU0sU0FBUyw4QkFBZixBQUFlLEFBQWtCLEFBQ2pDO1lBQUEsQUFBTSxTQUFOLEFBQWUsQUFFZjs7YUFBTyxFQUFFLFVBQVQsQUFBTyxBQUNSOzs7OztFQU5tQixnQixBQUFNOztBQXlDNUIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2dCQUFZLEFBQW1CLGtEQUZqQyxBQUFPLEFBRU8sQUFBK0IsQUFFOUM7QUFKUSxBQUNMO0FBRkosQUFPQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixNQUFyQixBQUEyQixvQkFBMUMsQUFBZSxBQUErQyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWtuZXBwcmF0aC9HaXRIdWIvb3Blbi13b3JsZCJ9