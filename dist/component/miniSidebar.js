"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MiniSidebar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MiniSidebar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mini-sidebar"
  }, props.children);
}