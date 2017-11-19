webpackHotUpdate(5,{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(458);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Char.js';


var Char = function (_React$Component) {
  (0, _inherits3.default)(Char, _React$Component);

  function Char(props) {
    (0, _classCallCheck3.default)(this, Char);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Char.__proto__ || (0, _getPrototypeOf2.default)(Char)).call(this, props));

    var _this$props = _this.props,
        mapSize = _this$props.mapSize,
        spawn = _this$props.spawn;

    _this.state = {
      top: spawn ? spawn.top * 100 - 100 : mapSize * 50 - 50,
      left: spawn ? spawn.left * 100 - 100 : mapSize * 50 - 50
    };
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Char, [{
    key: 'tick',
    value: function tick() {
      var mapSize = this.props.mapSize;
      var _state = this.state,
          top = _state.top,
          left = _state.left;

      var moveType = Math.floor(Math.random() * 3);
      if (moveType === 0) {
        var bottom = Math.floor(Math.random() * 2) === 0;
        var _top = top;
        if (bottom) {
          if (top < (mapSize - 1) * 100) _top = top + 100;
        } else {
          if (top > 0) _top = top - 100;
        }
        this.setState({
          top: _top,
          direction: bottom ? 'bottom' : 'top'
        });
      } else if (moveType === 1) {
        var right = Math.floor(Math.random() * 2) === 0;
        var _left = left;
        if (right) {
          if (left < (mapSize - 1) * 100) _left = left + 100;
        } else {
          if (left > 0) _left = left - 100;
        }
        this.setState({
          left: _left,
          direction: right ? 'right' : 'left'
        });
      } else {
        this.setState({ direction: undefined });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.interval = setInterval(this.tick, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          mapSize = _props.mapSize,
          color = _props.color;
      var _state2 = this.state,
          top = _state2.top,
          left = _state2.left,
          direction = _state2.direction;

      return _react2.default.createElement('div', {
        style: (0, _defineProperty3.default)({
          width: 100,
          height: 100,
          background: color || '#317692',
          top: top,
          left: left,
          position: 'absolute',
          transition: 'top 1.5s, left 1.5s',
          boxSizing: 'border-box'
        }, 'border-' + direction, '25px solid #AB7692'), __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      });
    }
  }]);

  return Char;
}(_react2.default.Component);

module.exports = Char;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoYXIiLCJwcm9wcyIsIm1hcFNpemUiLCJzcGF3biIsInN0YXRlIiwidG9wIiwibGVmdCIsInRpY2siLCJiaW5kIiwibW92ZVR5cGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJib3R0b20iLCJfdG9wIiwic2V0U3RhdGUiLCJkaXJlY3Rpb24iLCJyaWdodCIsIl9sZWZ0IiwidW5kZWZpbmVkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsImJveFNpemluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1o7O3NCQUNxQixNQUZULEFBRWM7UUFGZCxBQUVWLHNCQUZVLEFBRVY7UUFGVSxBQUVELG9CQUZDLEFBRUQsQUFDakI7O1VBQUEsQUFBSztXQUNFLFFBQVEsTUFBQSxBQUFNLE1BQU4sQUFBWSxNQUFwQixBQUEwQixNQUFNLFVBQUEsQUFBVSxLQURwQyxBQUN5QyxBQUNwRDtZQUFNLFFBQVEsTUFBQSxBQUFNLE9BQU4sQUFBYSxNQUFyQixBQUEyQixNQUFNLFVBQUEsQUFBVSxLQUZuRCxBQUFhLEFBRTJDLEFBRXhEO0FBSmEsQUFDWDtVQUdGLEFBQUssT0FBTyxNQUFBLEFBQUssS0FBTCxBQUFVLEtBUEosQUFPbEI7V0FDRDs7Ozs7MkJBQ087VUFBQSxBQUNFLFVBQVksS0FEZCxBQUNtQixNQURuQixBQUNFO21CQUNjLEtBRmhCLEFBRXFCO1VBRnJCLEFBRUUsYUFGRixBQUVFO1VBRkYsQUFFTyxjQUZQLEFBRU8sQUFDYjs7VUFBTSxXQUFXLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFqQyxBQUFpQixBQUEyQixBQUM1QztVQUFJLGFBQUosQUFBaUIsR0FBRyxBQUNsQjtZQUFNLFNBQVMsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQWhCLEFBQTJCLE9BQTFDLEFBQWlELEFBQ2pEO1lBQUksT0FBSixBQUFXLEFBQ1g7WUFBQSxBQUFJLFFBQVEsQUFDVjtjQUFJLE1BQU0sQ0FBQyxVQUFELEFBQVcsS0FBckIsQUFBMEIsS0FBSyxPQUFPLE1BQVAsQUFBYSxBQUM3QztBQUZELGVBRU8sQUFDTDtjQUFJLE1BQUosQUFBVSxHQUFHLE9BQU8sTUFBUCxBQUFhLEFBQzNCO0FBQ0Q7YUFBQSxBQUFLO2VBQVMsQUFDUCxBQUNMO3FCQUFXLFNBQUEsQUFBUyxXQUZ0QixBQUFjLEFBRW1CLEFBRWxDO0FBSmUsQUFDWjtBQVRKLGlCQVlXLGFBQUosQUFBaUIsR0FBRyxBQUN6QjtZQUFNLFFBQVEsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQWhCLEFBQTJCLE9BQXpDLEFBQWdELEFBQ2hEO1lBQUksUUFBSixBQUFZLEFBQ1o7WUFBQSxBQUFJLE9BQU8sQUFDVDtjQUFJLE9BQU8sQ0FBQyxVQUFELEFBQVcsS0FBdEIsQUFBMkIsS0FBSyxRQUFRLE9BQVIsQUFBZSxBQUNoRDtBQUZELGVBRU8sQUFDTDtjQUFJLE9BQUosQUFBVyxHQUFHLFFBQVEsT0FBUixBQUFlLEFBQzlCO0FBQ0Q7YUFBQSxBQUFLO2dCQUFTLEFBQ04sQUFDTjtxQkFBVyxRQUFBLEFBQVEsVUFGckIsQUFBYyxBQUVpQixBQUVoQztBQUplLEFBQ1o7QUFURyxPQUFBLE1BWUEsQUFDTDthQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWMsQUFBYSxBQUM1QjtBQUNGOzs7O3dDQUNvQixBQUNuQjtXQUFBLEFBQUssV0FBVyxZQUFZLEtBQVosQUFBaUIsTUFBakMsQUFBZ0IsQUFBdUIsQUFDeEM7Ozs7MkNBQ3VCLEFBQ3RCO29CQUFjLEtBQWQsQUFBbUIsQUFDcEI7Ozs7NkJBQ1M7bUJBQ21CLEtBRG5CLEFBQ3dCO1VBRHhCLEFBQ0EsaUJBREEsQUFDQTtVQURBLEFBQ1MsZUFEVCxBQUNTO29CQUNnQixLQUZ6QixBQUU4QjtVQUY5QixBQUVBLGNBRkEsQUFFQTtVQUZBLEFBRUssZUFGTCxBQUVLO1VBRkwsQUFFVyxvQkFGWCxBQUVXLEFBQ25COzs7O2lCQUVJLEFBQ1MsQUFDUDtrQkFGRixBQUVVLEFBQ1I7c0JBQVksU0FIZCxBQUd1QixBQUNyQjtlQUpGLEFBS0U7Z0JBTEYsQUFNRTtvQkFORixBQU1ZLEFBQ1Y7c0JBUEYsQUFPYyxBQUNaO3FCQVJGLEFBUWE7QUFQWCxXQVFDLFlBVEgsQUFTZSxXQVZqQixBQUNFLEFBUzJCO29CQVY3QjtzQkFERixBQUNFLEFBYUg7QUFiRztBQUNFLE9BREY7Ozs7O0VBcERhLGdCQUFNLEE7O0FBb0V6QixPQUFBLEFBQU8sVUFBUCxBQUFpQiIsImZpbGUiOiJDaGFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/mknepprath/GitHub/open-world/components/Char.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mknepprath/GitHub/open-world/components/Char.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMjk3NjQ1ZmExM2YzMDBlN2Y5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFyLmpzPzJmZmIzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDaGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBtYXBTaXplLCBzcGF3biB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3A6IHNwYXduID8gc3Bhd24udG9wICogMTAwIC0gMTAwIDogbWFwU2l6ZSAqIDUwIC0gNTAsXG4gICAgICBsZWZ0OiBzcGF3biA/IHNwYXduLmxlZnQgKiAxMDAgLSAxMDAgOiBtYXBTaXplICogNTAgLSA1MFxuICAgIH1cbiAgICB0aGlzLnRpY2sgPSB0aGlzLnRpY2suYmluZCh0aGlzKVxuICB9XG4gIHRpY2sgKCkge1xuICAgIGNvbnN0IHsgbWFwU2l6ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgbW92ZVR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxuICAgIGlmIChtb3ZlVHlwZSA9PT0gMCkge1xuICAgICAgY29uc3QgYm90dG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDBcbiAgICAgIGxldCBfdG9wID0gdG9wXG4gICAgICBpZiAoYm90dG9tKSB7XG4gICAgICAgIGlmICh0b3AgPCAobWFwU2l6ZSAtIDEpICogMTAwKSBfdG9wID0gdG9wICsgMTAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodG9wID4gMCkgX3RvcCA9IHRvcCAtIDEwMFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvcDogX3RvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBib3R0b20gPyAnYm90dG9tJyA6ICd0b3AnXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAobW92ZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDBcbiAgICAgIGxldCBfbGVmdCA9IGxlZnRcbiAgICAgIGlmIChyaWdodCkge1xuICAgICAgICBpZiAobGVmdCA8IChtYXBTaXplIC0gMSkgKiAxMDApIF9sZWZ0ID0gbGVmdCArIDEwMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxlZnQgPiAwKSBfbGVmdCA9IGxlZnQgLSAxMDBcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsZWZ0OiBfbGVmdCxcbiAgICAgICAgZGlyZWN0aW9uOiByaWdodCA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXJlY3Rpb246IHVuZGVmaW5lZCB9KVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGljaywgMTAwMClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBtYXBTaXplLCBjb2xvciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0LCBkaXJlY3Rpb24gfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3IgfHwgJyMzMTc2OTInLFxuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBsZWZ0LFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0b3AgMS41cywgbGVmdCAxLjVzJyxcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICBbJ2JvcmRlci0nICsgZGlyZWN0aW9uXTogJzI1cHggc29saWQgI0FCNzY5MidcbiAgICAgICAgfX0gLz5cbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGFyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NoYXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQVRBO0FBYUE7QUFFQTs7OztBQUVBO0FBQUE7Ozs7QUFHQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFGQTtBQWFBO0FBYkE7QUFDQTs7Ozs7QUFyREE7QUFDQTtBQW1FQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9