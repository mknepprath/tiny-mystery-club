'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Clock.js';

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', {
    className: 'jsx-3283757383' + ' ' + ((light ? 'light' : '') || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: '3283757383',
    css: 'div.jsx-3283757383{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}.light.jsx-3283757383{background-color:#999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBR3dCLEFBT1MsYUFORCxTQU92QixZQU5nQixjQUNxQixpQ0FDYixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9DbG9jay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWtuZXBwcmF0aC9HaXRIdWIvb3Blbi13b3JsZCIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgKHsgbGFzdFVwZGF0ZSwgbGlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcbiAgICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcblxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogblxuIl19 */\n/*@ sourceURL=components/Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOlsibGFzdFVwZGF0ZSIsImxpZ2h0IiwiZm9ybWF0IiwiRGF0ZSIsInBhZCIsInQiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozs7OztrQkFBZSxnQkFBMkI7TUFBeEIsQUFBd0Isa0JBQXhCLEFBQXdCO01BQVosQUFBWSxhQUFaLEFBQVksQUFDeEM7O3lCQUNFLGNBQUE7MENBQWdCLFFBQUEsQUFBUSxVQUF4QixBQUFrQyxPQUFsQzs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxTQUNVLElBQUEsQUFBSSxLQURkLEFBQ0csQUFBTyxBQUFTO2FBRG5CO1NBREYsQUFDRSxBQWdCSDtBQWhCRztBQUZKOztBQW9CQSxJQUFNLFNBQVMsU0FBVCxBQUFTLFVBQUE7U0FBUSxJQUFJLEVBQVosQUFBUSxBQUFJLEFBQUUsdUJBQWtCLElBQUksRUFBcEMsQUFBZ0MsQUFBSSxBQUFFLHlCQUFvQixJQUFJLEVBQTlELEFBQTBELEFBQUksQUFBRTtBQUEvRTs7QUFFQSxJQUFNLE1BQU0sU0FBTixBQUFNLE9BQUE7U0FBSyxJQUFBLEFBQUksV0FBSixBQUFhLElBQWxCLEFBQXdCO0FBQXBDIiwiZmlsZSI6IkNsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=