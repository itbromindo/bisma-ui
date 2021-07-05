"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuList;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MenuList(props) {
  const dropdownStyle = {
    width: '100%',
    padding: '10px',
    outline: 'none',
    border: '1px solid #518ff4',
    color: '#25396f',
    borderRadius: '10px',
    backgroundColor: '#EAF2FF'
  };
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-title"
  }, "Modul Bisma"), /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item",
    style: {
      borderBottom: '1px solid #D4D4D4',
      paddingBottom: '10px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("select", {
    style: dropdownStyle
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "Modul Penjualan"
  }, "Modul Penjualan"))), props.children);
}