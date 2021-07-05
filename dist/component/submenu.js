"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubMenu;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubMenu(props) {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item active"
  }, props.children);
}