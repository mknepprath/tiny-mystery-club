'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.addCount = exports.startClock = exports.serverRenderClock = exports.reducer = exports.actionTypes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TICK:
      return (0, _assign2.default)({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return (0, _assign2.default)({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

// ACTIONS
var serverRenderClock = exports.serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
  };
};

var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
    }, 800);
  };
};

var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJsYXN0VXBkYXRlIiwibGlnaHQiLCJjb3VudCIsImFjdGlvblR5cGVzIiwiQUREIiwiVElDSyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0cyIsInNlcnZlclJlbmRlckNsb2NrIiwiaXNTZXJ2ZXIiLCJkaXNwYXRjaCIsIkRhdGUiLCJub3ciLCJzdGFydENsb2NrIiwic2V0SW50ZXJ2YWwiLCJhZGRDb3VudCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWE7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O0FBRVAsSUFBTTtjQUFzQixBQUNkLEFBQ1o7U0FGMEIsQUFFbkIsQUFDUDtTQUhGLEFBQTRCLEFBR25CLEFBR1Q7QUFONEIsQUFDMUI7O0FBS0ssSUFBTTtPQUFjLEFBQ3BCLEFBQ0w7UUFBTSxBQUdSOztBQUxPLEFBQW9CLEFBTTNCO0FBTjJCLEFBQ3pCLE1BS1csNEJBQVUsU0FBVixBQUFVLFVBQXlDO01BQXhDLEFBQXdDLDRFQUFoQyxBQUFnQztNQUFYLEFBQVcsbUJBQzlEOztVQUFRLE9BQVIsQUFBZSxBQUNiO1NBQUssWUFBTCxBQUFpQixBQUNmO2FBQU8sc0JBQUEsQUFBYyxJQUFkLEFBQWtCLE9BQU8sRUFBRSxZQUFZLE9BQWQsQUFBcUIsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFsRSxBQUFPLEFBQXlCLEFBQXlDLEFBQzNFO1NBQUssWUFBTCxBQUFpQixBQUNmO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFekI7QUFIa0MsQUFDOUIsT0FESztBQUdBO2FBUFgsQUFPVyxBQUFPLEFBRW5COztBQVZNLENBQUE7O0FBWVAsQUFDQTtBQUFPLElBQU0sZ0RBQW9CLFNBQXBCLEFBQW9CLGtCQUFBLEFBQUMsVUFBRDtTQUFjLG9CQUFZLEFBQ3pEO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixNQUFNLE9BQU8sQ0FBakMsQUFBa0MsVUFBVSxJQUFJLEtBQWhFLEFBQU8sQUFBUyxBQUFnRCxBQUFLLEFBQ3RFO0FBRmdDO0FBQTFCLEFBSVA7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsYUFBQTtTQUFNLG9CQUFZLEFBQzFDO3VCQUFtQixZQUFBO2FBQU0sU0FBUyxFQUFFLE1BQU0sWUFBUixBQUFvQixNQUFNLE9BQTFCLEFBQWlDLE1BQU0sSUFBSSxLQUExRCxBQUFNLEFBQVMsQUFBMkMsQUFBSztBQUEzRSxLQUFBLEVBQVAsQUFBTyxBQUFxRixBQUM3RjtBQUZ5QjtBQUFuQixBQUlQOztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQUE7U0FBTSxvQkFBWSxBQUN4QztXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUNyQztBQUZ1QjtBQUFqQixBQUlQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQXdDO01BQXZDLEFBQXVDLG1GQUF4QixBQUF3QixBQUMvRDs7U0FBTyx3QkFBQSxBQUFZLFNBQVosQUFBcUIsY0FBYyxpREFBMUMsQUFBTyxBQUFtQyxBQUFvQixBQUFnQixBQUMvRTtBQUZNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ta25lcHByYXRoL0dpdEh1Yi9vcGVuLXdvcmxkIn0=