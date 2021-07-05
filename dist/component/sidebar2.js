"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar2;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar2(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "sidebar",
    className: props.sidebarStatus
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-wrapper active",
    style: {
      width: "65px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-menu"
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      minHeight: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      zIndex: 1,
      backgroundColor: '#EAF2FF',
      position: 'fixed',
      minHeight: '100vh'
    }
  }, props.miniSidebar, /*#__PURE__*/_react.default.createElement("div", {
    className: "mini-sidebar",
    style: {
      position: 'fixed',
      bottom: '0px',
      padding: '0px 5px 20px 5px'
    }
  }, props.profile))))))));
}