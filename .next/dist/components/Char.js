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
      left: spawn ? spawn.left * 100 - 100 : (mapSize * 100 - 100) / 2
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
            top: nextTop,
            direction: down ? 'Bottom' : 'Top'
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
            left: nextLeft,
            direction: right ? 'Right' : 'Left'
          });
        }
      } else {
        // Eventually switch this to change a separate state  property dictating
        // whether to use the walking sprite or not. Direction should stay set so
        // sprite knows which way to face.
        this.setState({
          direction: null
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
          top = _state2.top;

      var hasSpriteImage = !color;
      return _react2.default.createElement('div', {
        onClick: this.onClickNPCHandler,
        style: (0, _defineProperty3.default)({
          position: 'absolute',
          left: left,
          top: top,
          width: hasSpriteImage ? 100 : 80,
          height: hasSpriteImage ? 100 : 80,
          background: color || 'url(\'./static/assets/sprite2.gif\')',
          transition: 'top 1.5s, left 1.5s',
          boxShadow: this.state.clicked ? '0 0 10px orange' : null,
          boxSizing: 'border-box',
          margin: hasSpriteImage ? 0 : 10
        }, 'border' + direction, hasSpriteImage ? null : '20px solid black'), __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      });
    }
  }]);

  return Char;
}(_react.Component);

exports.default = Char;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoYXIiLCJwcm9wcyIsIm1hcFNpemUiLCJzcGF3biIsInN0YXRlIiwiY2xpY2tlZCIsImRpcmVjdGlvbiIsInRvcCIsImxlZnQiLCJvbkNsaWNrTlBDSGFuZGxlciIsImJpbmQiLCJ0aWNrIiwic2V0U3RhdGUiLCJtYXAiLCJtb3ZlVHlwZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRvd24iLCJuZXh0VG9wIiwicmlnaHQiLCJuZXh0TGVmdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY29sb3IiLCJoYXNTcHJpdGVJbWFnZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImJveFNpemluZyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVWO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1o7O1FBRFksQUFHVixVQUhVLEFBR1MsTUFIVCxBQUdWO1FBSFUsQUFHRCxRQUhDLEFBR1MsTUFIVCxBQUdELEFBRWpCOztBQUNBO0FBQ0E7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtpQkFGVyxBQUVBLEFBQ1g7V0FBSyxRQUFRLE1BQUEsQUFBTSxNQUFOLEFBQVksTUFBcEIsQUFBMEIsTUFBTSxDQUFDLFVBQUEsQUFBVSxNQUFYLEFBQWlCLE9BSDNDLEFBR2tELEFBQzdEO1lBQU0sUUFBUSxNQUFBLEFBQU0sT0FBTixBQUFhLE1BQXJCLEFBQTJCLE1BQU0sQ0FBQyxVQUFBLEFBQVUsTUFBWCxBQUFpQixPQUoxRCxBQUFhLEFBSW9ELEFBR2pFO0FBUGEsQUFDWDs7VUFNRixBQUFLLG9CQUFvQixNQUFBLEFBQUssa0JBQUwsQUFBdUIsS0FBaEQsQUFDQTtVQUFBLEFBQUssT0FBTyxNQUFBLEFBQUssS0FBTCxBQUFVLEtBZkosQUFlbEI7V0FDRDs7Ozs7d0NBRW9CLEFBQ25CO1dBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzFCOzs7OzJCQUVPO21CQUNtQixLQURuQixBQUN3QjtVQUR4QixBQUNFLGlCQURGLEFBQ0U7VUFERixBQUNXLGFBRFgsQUFDVzttQkFDSyxLQUZoQixBQUVxQjtVQUZyQixBQUVFLGFBRkYsQUFFRTtVQUZGLEFBRU8sY0FGUCxBQUVPLEFBRWI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1VBQU0sV0FBVyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBakMsQUFBaUIsQUFBMkIsQUFFNUM7O1VBQUksYUFBSixBQUFpQixHQUFHLEFBQ2xCO1lBQU0sT0FBTyxLQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssV0FBaEIsQUFBMkIsT0FBeEMsQUFBK0MsQUFDL0M7WUFBSSxVQUFKLEFBQWMsQUFDZDtZQUFBLEFBQUksTUFBTSxBQUNSO0FBQ0E7Y0FBSSxNQUFNLENBQUMsVUFBRCxBQUFXLEtBQXJCLEFBQTBCLEtBQUssVUFBVSxNQUFWLEFBQWdCLEFBQ2hEO0FBSEQsZUFHTyxBQUNMO0FBQ0E7Y0FBSSxNQUFKLEFBQVUsR0FBRyxVQUFVLE1BQVYsQUFBZ0IsQUFDOUI7QUFDRDtBQUNBO0FBQ0E7WUFBSSxDQUFDLElBQUksVUFBQSxBQUFVLE1BQWQsQUFBb0IsR0FBRyxPQUFBLEFBQU8sTUFBbkMsQUFBSyxBQUFvQyxJQUFJLEFBQzNDO2VBQUEsQUFBSztpQkFBUyxBQUNQLEFBQ0w7dUJBQVcsT0FBQSxBQUFPLFdBRnBCLEFBQWMsQUFFaUIsQUFFaEM7QUFKZSxBQUNaO0FBSUw7QUFsQkQsaUJBa0JXLGFBQUosQUFBaUIsR0FBRyxBQUN6QjtZQUFNLFFBQVEsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQWhCLEFBQTJCLE9BQXpDLEFBQWdELEFBQ2hEO1lBQUksV0FBSixBQUFlLEFBQ2Y7WUFBQSxBQUFJLE9BQU8sQUFDVDtBQUNBO2NBQUksT0FBTyxDQUFDLFVBQUQsQUFBVyxLQUF0QixBQUEyQixLQUFLLFdBQVcsT0FBWCxBQUFrQixBQUNuRDtBQUhELGVBR08sQUFDTDtBQUNBO2NBQUksT0FBSixBQUFXLEdBQUcsV0FBVyxPQUFYLEFBQWtCLEFBQ2pDO0FBQ0Q7QUFDQTtBQUNBO1lBQUksQ0FBQyxJQUFJLE1BQUEsQUFBTSxNQUFWLEFBQWdCLEdBQUcsV0FBQSxBQUFXLE1BQW5DLEFBQUssQUFBb0MsSUFBSSxBQUMzQztlQUFBLEFBQUs7a0JBQVMsQUFDTixBQUNOO3VCQUFXLFFBQUEsQUFBUSxVQUZyQixBQUFjLEFBRWlCLEFBRWhDO0FBSmUsQUFDWjtBQUlMO0FBbEJNLE9BQUEsTUFrQkEsQUFDTDtBQUNBO0FBQ0E7QUFDQTthQUFBLEFBQUs7cUJBQUwsQUFBYyxBQUNELEFBRWQ7QUFIZSxBQUNaO0FBR0w7Ozs7d0NBQ29CLEFBQ25CO1dBQUEsQUFBSyxXQUFXLFlBQVksS0FBWixBQUFpQixNQUFqQyxBQUFnQixBQUF1QixBQUN4Qzs7OzsyQ0FDdUIsQUFDdEI7b0JBQWMsS0FBZCxBQUFtQixBQUNwQjs7Ozs2QkFDUztVQUFBLEFBQ0EsUUFBVSxLQURWLEFBQ2UsTUFEZixBQUNBO29CQUN5QixLQUZ6QixBQUU4QjtVQUY5QixBQUVBLG9CQUZBLEFBRUE7VUFGQSxBQUVXLGVBRlgsQUFFVztVQUZYLEFBRWlCLGNBRmpCLEFBRWlCLEFBRXpCOztVQUFNLGlCQUFpQixDQUF2QixBQUF3QixBQUN4Qjs7aUJBRWEsS0FEWCxBQUNnQixBQUNkOztvQkFBQSxBQUNZLEFBQ1Y7Z0JBRkYsQUFHRTtlQUhGLEFBSUU7aUJBQU8saUJBQUEsQUFBaUIsTUFKMUIsQUFJZ0MsQUFDOUI7a0JBQVEsaUJBQUEsQUFBaUIsTUFMM0IsQUFLaUMsQUFDL0I7c0JBQVksU0FOZCxBQU9FO3NCQVBGLEFBT2MsQUFDWjtxQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsb0JBUmxDLEFBUXNELEFBQ3BEO3FCQVRGLEFBU2EsQUFDWDtrQkFBUSxpQkFBQSxBQUFpQixJQVYzQixBQVUrQjtBQVQ3QixzQkFERixBQVdZLFdBQWMsaUJBQUEsQUFBaUIsT0FiN0MsQUFFRSxBQVdrRDtvQkFicEQ7c0JBREYsQUFDRSxBQWdCSDtBQWhCRztBQUNFLE9BREY7Ozs7O0FBMUZhLEEsQUE2R25COztrQkFBQSxBQUFlIiwiZmlsZSI6IkNoYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==