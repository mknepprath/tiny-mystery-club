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
      left: spawn ? spawn.left * 100 - 100 : (mapSize * 100 - 100) / 2,
      spriteType: Math.floor(Math.random() * 2) ? 'sprite' : 'peng',
      top: spawn ? spawn.top * 100 - 100 : (mapSize * 100 - 100) / 2,
      walking: false
    };

    _this.onClickNPCHandler = _this.onClickNPCHandler.bind(_this);
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Char, [{
    key: 'onClickNPCHandler',
    value: function onClickNPCHandler() {
      // this.setState({ clicked: true })
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
      // If a color is included, this becomes a null NPC.
      var color = this.props.color;
      var _state2 = this.state,
          direction = _state2.direction,
          left = _state2.left,
          spriteType = _state2.spriteType,
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
          background: color || 'url(\'./static/assets/' + spriteType + '-' + facing[direction] + (walking ? '-walk' : '') + '.gif\')',
          transition: 'top 1s linear, left 1s linear',
          boxShadow: this.state.clicked ? '0 0 10px orange' : null,
          boxSizing: 'border-box',
          margin: hasSpriteImage ? 0 : 10
        }, 'border' + direction, hasSpriteImage ? null : '20px solid black'), __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      });
    }
  }]);

  return Char;
}(_react.Component);

exports.default = Char;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY2luZyIsIkNoYXIiLCJwcm9wcyIsIm1hcFNpemUiLCJzcGF3biIsInN0YXRlIiwiY2xpY2tlZCIsImRpcmVjdGlvbiIsImxlZnQiLCJzcHJpdGVUeXBlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9wIiwid2Fsa2luZyIsIm9uQ2xpY2tOUENIYW5kbGVyIiwiYmluZCIsInRpY2siLCJtYXAiLCJtb3ZlVHlwZSIsImRvd24iLCJuZXh0VG9wIiwic2V0U3RhdGUiLCJyaWdodCIsIm5leHRMZWZ0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb2xvciIsImhhc1Nwcml0ZUltYWdlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiYm94U2l6aW5nIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNO1lBQVMsQUFDSCxBQUNWO1VBRmEsQUFFTCxBQUNSO1dBSGEsQUFHSixBQUNUO1NBSkYsQUFBZSxBQUlOO0FBSk0sQUFDYjs7SSxBQU1JO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1o7O1FBRFksQUFHVixVQUhVLEFBR1MsTUFIVCxBQUdWO1FBSFUsQUFHRCxRQUhDLEFBR1MsTUFIVCxBQUdELEFBRWpCOztBQUNBO0FBQ0E7O1VBQUEsQUFBSztlQUFRLEFBQ0YsQUFDVDtpQkFGVyxBQUVBLEFBQ1g7WUFBTSxRQUFRLE1BQUEsQUFBTSxPQUFOLEFBQWEsTUFBckIsQUFBMkIsTUFBTSxDQUFDLFVBQUEsQUFBVSxNQUFYLEFBQWlCLE9BSDdDLEFBR29ELEFBQy9EO2tCQUFZLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFo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O1VBQU0saUJBQWlCLENBQXZCLEFBQXdCLEFBRXhCOzs7aUJBRWEsS0FEWCxBQUNnQixBQUNkOztvQkFBQSxBQUNZLEFBQ1Y7Z0JBRkYsQUFHRTtlQUhGLEFBSUU7aUJBQU8saUJBQUEsQUFBaUIsTUFKMUIsQUFJZ0MsQUFDOUI7a0JBQVEsaUJBQUEsQUFBaUIsTUFMM0IsQUFLaUMsQUFDL0I7c0JBQVksb0NBQUEsQUFBaUMsbUJBQWMsT0FBL0MsQUFBK0MsQUFBTyxjQUFhLFVBQUEsQUFBVSxVQUE3RSxBQUF1RixNQU5yRyxBQU9FO3NCQVBGLEFBT2MsQUFDWjtxQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsb0JBUmxDLEFBUXNELEFBQ3BEO3FCQVRGLEFBU2EsQUFDWDtrQkFBUSxpQkFBQSxBQUFpQixJQVYzQixBQVUrQjtBQVQ3QixzQkFERixBQVdZLFdBQWMsaUJBQUEsQUFBaUIsT0FiN0MsQUFFRSxBQVdrRDtvQkFicEQ7c0JBREYsQUFDRSxBQWdCSDtBQWhCRztBQUNFLE9BREY7Ozs7O0FBaEdhLEEsQUFtSG5COztrQkFBQSxBQUFlIiwiZmlsZSI6IkNoYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21rbmVwcHJhdGgvR2l0SHViL29wZW4td29ybGQifQ==