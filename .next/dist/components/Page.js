'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _AddCount = require('./AddCount');

var _AddCount2 = _interopRequireDefault(_AddCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Page.js';
exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (_ref) {
  var title = _ref.title,
      linkTo = _ref.linkTo,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_AddCount2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: linkTo, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Navigate'))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiY29ubmVjdCIsIkNsb2NrIiwiQWRkQ291bnQiLCJzdGF0ZSIsInRpdGxlIiwibGlua1RvIiwibGFzdFVwZGF0ZSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7OzsyQ0FBdUIsaUJBQUE7U0FBQSxBQUFTO0FBQWpCLENBQUEsRUFBd0IsZ0JBQTBDO01BQXZDLEFBQXVDLGFBQXZDLEFBQXVDO01BQWhDLEFBQWdDLGNBQWhDLEFBQWdDO01BQXhCLEFBQXdCLGtCQUF4QixBQUF3QjtNQUFaLEFBQVksYUFBWixBQUFZLEFBQy9FOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBREYsQUFDRSxBQUNBLHdCQUFBLEFBQUMsaUNBQU0sWUFBUCxBQUFtQixZQUFZLE9BQS9CLEFBQXNDO2dCQUF0QztrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDOztnQkFBRDtrQkFIRixBQUdFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFZO2dCQUFaO2tCQUFBLEFBQW9CO0FBQXBCO3FCQUFvQixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FOMUIsQUFDRSxBQUlFLEFBQ0UsQUFBb0IsQUFJM0I7QUFYRCxBQUFlIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==