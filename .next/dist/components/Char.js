'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mknepprath/GitHub/open-world/components/Char.js';


var facing = {
  'Bottom': 'down',
  'Left': 'left',
  'Right': 'right',
  'Top': 'up'
};

var Char = function (_Component) {
  (0, _inherits3.default)(Char, _Component);

  function Char(props) {
    (0, _classCallCheck3.default)(this, Char);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Char.__proto__ || (0, _getPrototypeOf2.default)(Char)).call(this, props));

    var mapSize = props.mapSize,
        spawn = props.spawn;

    // Set NPC location based on spawn point.
    // If no spawn point is provided, center it.

    _this.state = {
      clicked: false,
      direction: null,
      top: spawn ? spawn.top * 100 - 100 : (mapSize * 100 - 100) / 2,
      left: spawn ? spawn.left * 100 - 100 : (mapSize * 100 - 100) / 2,
      walking: false
    };

    _this.onClickNPCHandler = _this.onClickNPCHandler.bind(_this);
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Char, [{
    key: 'onClickNPCHandler',
    value: function onClickNPCHandler() {
      this.setState({ clicked: true });
    }
  }, {
    key: 'tick',
    value: function tick() {
      var _props = this.props,
          mapSize = _props.mapSize,
          map = _props.map;
      var _state = this.state,
          top = _state.top,
          left = _state.left;

      // moveTypes:
      // - 0 = up/down
      // - 1 = left/right
      // - 2 = don't move

      var moveType = Math.floor(Math.random() * 3);

      if (moveType === 0) {
        var down = Math.floor(Math.random() * 2) === 0;
        var nextTop = top;
        if (down) {
          // Moving down, so add to the distance from the top.
          if (top < (mapSize - 1) * 100) nextTop = top + 100;
        } else {
          // Moving up, so move closer to the top.
          if (top > 0) nextTop = top - 100;
        }
        // If there is nothing on the map in the location the NPC is moving to,
        // then go ahead and update with the new position.
        if (!map[nextTop / 100 + 1][left / 100 + 1]) {
          this.setState({
            direction: down ? 'Bottom' : 'Top',
            top: nextTop,
            walking: true
          });
        }
      } else if (moveType === 1) {
        var right = Math.floor(Math.random() * 2) === 0;
        var nextLeft = left;
        if (right) {
          // Moving right, so add to the distance from the left.
          if (left < (mapSize - 1) * 100) nextLeft = left + 100;
        } else {
          // Moving left, so move closer to the left.
          if (left > 0) nextLeft = left - 100;
        }
        // If there is nothing on the map in the location the NPC is moving to,
        // then go ahead and update with the new position.
        if (!map[top / 100 + 1][nextLeft / 100 + 1]) {
          this.setState({
            direction: right ? 'Right' : 'Left',
            left: nextLeft,
            walking: true
          });
        }
      } else {
        // Eventually switch this to change a separate state  property dictating
        // whether to use the walking sprite or not. Direction should stay set so
        // sprite knows which way to face.
        this.setState({
          walking: false
        });
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
      var color = this.props.color;
      var _state2 = this.state,
          direction = _state2.direction,
          left = _state2.left,
          top = _state2.top,
          walking = _state2.walking;

      var hasSpriteImage = !color;
      return _react2.default.createElement('div', {
        onClick: this.onClickNPCHandler,
        style: (0, _defineProperty3.default)({
          position: 'absolute',
          left: left,
          top: top,
          width: hasSpriteImage ? 100 : 80,
          height: hasSpriteImage ? 100 : 80,
          background: color || 'url(\'./static/assets/sprite-' + facing[direction] + (walking ? '-walk' : '') + '.gif\')',
          transition: 'top 1s linear, left 1s linear',
          boxShadow: this.state.clicked ? '0 0 10px orange' : null,
          boxSizing: 'border-box',
          margin: hasSpriteImage ? 0 : 10
        }, 'border' + direction, hasSpriteImage ? null : '20px solid black'), __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      });
    }
  }]);

  return Char;
}(_react.Component);

exports.default = Char;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY2luZyIsIkNoYXIiLCJwcm9wcyIsIm1hcFNpemUiLCJzcGF3biIsInN0YXRlIiwiY2xpY2tlZCIsImRpcmVjdGlvbiIsInRvcCIsImxlZnQiLCJ3YWxraW5nIiwib25DbGlja05QQ0hhbmRsZXIiLCJiaW5kIiwidGljayIsInNldFN0YXRlIiwibWFwIiwibW92ZVR5cGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkb3duIiwibmV4dFRvcCIsInJpZ2h0IiwibmV4dExlZnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNvbG9yIiwiaGFzU3ByaXRlSW1hZ2UiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJib3hTaXppbmciLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU07WUFBUyxBQUNILEFBQ1Y7VUFGYSxBQUVMLEFBQ1I7V0FIYSxBQUdKLEFBQ1Q7U0FKRixBQUFlLEFBSU47QUFKTSxBQUNiOztJQU1JLEE7Z0NBQ0o7O2dCQUFBLEFBQWEsT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWjs7UUFEWSxBQUdWLFVBSFUsQUFHUyxNQUhULEFBR1Y7UUFIVSxBQUdELFFBSEMsQUFHUyxNQUhULEFBR0QsQUFFakI7O0FBQ0E7QUFDQTs7VUFBQSxBQUFLO2VBQVEsQUFDRixBQUNUO2lCQUZXLEFBRUEsQUFDWDtXQUFLLFFBQVEsTUFBQSxBQUFNLE1BQU4sQUFBWSxNQUFwQixBQUEwQixNQUFNLENBQUMsVUFBQSxBQUFVLE1BQVgsQUFBaUIsT0FIM0MsQUFHa0QsQUFDN0Q7WUFBTSxRQUFRLE1BQUEsQUFBTSxPQUFOLEFBQWEsTUFBckIsQUFBMkIsTUFBTSxD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SEYsQUFJRTtpQkFBTyxpQkFBQSxBQUFpQixNQUoxQixBQUlnQyxBQUM5QjtrQkFBUSxpQkFBQSxBQUFpQixNQUwzQixBQUtpQyxBQUMvQjtzQkFBWSwyQ0FBd0MsT0FBeEMsQUFBd0MsQUFBTyxjQUFhLFVBQUEsQUFBVSxVQUF0RSxBQUFnRixNQU45RixBQU9FO3NCQVBGLEFBT2MsQUFDWjtxQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsb0JBUmxDLEFBUXNELEFBQ3BEO3FCQVRGLEFBU2EsQUFDWDtrQkFBUSxpQkFBQSxBQUFpQixJQVYzQixBQVUrQjtBQVQ3QixzQkFERixBQVdZLFdBQWMsaUJBQUEsQUFBaUIsT0FiN0MsQUFFRSxBQVdrRDtvQkFicEQ7c0JBREYsQUFDRSxBQWdCSDtBQWhCRztBQUNFLE9BREY7Ozs7O0FBN0ZhLEEsQUFnSG5COztrQkFBQSxBQUFlIiwiZmlsZSI6IkNoYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==