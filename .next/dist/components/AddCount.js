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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/AddCount.js';


var AddCount = function (_Component) {
  (0, _inherits3.default)(AddCount, _Component);

  function AddCount() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddCount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddCount.__proto__ || (0, _getPrototypeOf2.default)(AddCount)).call.apply(_ref, [this].concat(args))), _this), _this.add = function () {
      _this.props.addCount();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AddCount, [{
    key: 'render',
    value: function render() {
      var count = this.props.count;

      return _react2.default.createElement('div', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2569186640',
        css: 'div.jsx-2569186640{padding:0 0 20px 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBR2dDLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0FkZENvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgYWRkQ291bnQgfSBmcm9tICcuLi9zdG9yZSdcblxuY2xhc3MgQWRkQ291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBhZGQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGRDb3VudCgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY291bnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPkFkZENvdW50OiA8c3Bhbj57Y291bnR9PC9zcGFuPjwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGR9PkFkZCBUbyBDb3VudDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvdW50IH0pID0+ICh7IGNvdW50IH0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZENvdW50KVxuIl19 */\n/*@ sourceURL=components/AddCount.js */'
      }), _react2.default.createElement('h1', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'AddCount: ', _react2.default.createElement('span', {
        className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, count)), _react2.default.createElement('button', { onClick: this.add, className: 'jsx-2569186640',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Add To Count'));
    }
  }]);

  return AddCount;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var count = _ref2.count;
  return { count: count };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddCount);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWRkQ291bnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWRkQ291bnQiLCJBZGRDb3VudCIsImFkZCIsInByb3BzIiwiY291bnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBZ0I7Ozs7Ozs7SSxBQUVuQjs7Ozs7Ozs7Ozs7Ozs7Z05BQ0osQSxNQUFNLFlBQU0sQUFDVjtZQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7QTs7Ozs7NkJBRVM7VUFBQSxBQUNBLFFBQVUsS0FEVixBQUNlLE1BRGYsQUFDQSxBQUNSOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBTUU7QUFORiwwQkFNRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYyw4QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQU5oQixBQU1FLEFBQWMsQUFDZCx5QkFBQSxjQUFBLFlBQVEsU0FBUyxLQUFqQixBQUFzQixnQkFBdEI7O29CQUFBO3NCQUFBO0FBQUE7U0FSSixBQUNFLEFBT0UsQUFHTDs7Ozs7QUFsQm9CLEE7O0FBcUJ2QixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTtNQUFBLEFBQUcsY0FBSCxBQUFHO1NBQWEsRUFBRSxPQUFsQixBQUFnQjtBQUF4Qzs7QUFFQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRC9CLEFBQU8sQUFDSyxBQUE2QixBQUUxQztBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6IkFkZENvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=