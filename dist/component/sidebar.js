"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(props) {
  const sidebarToggleCloseButton = () => {
    return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      style: {
        width: '95%'
      }
    }), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "toggler"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn icon icon-left btn-light sidebar-hide d-xl-none d-block"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "bi bi-x bi-middle",
      onClick: e => props.updateSidebarStatus(''),
      style: {
        fontSize: '25pt'
      }
    })))))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "sidebar",
    className: props.sidebarStatus
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-wrapper active"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-menu"
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      minHeight: '100vh',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      backgroundColor: '#EAF2FF',
      position: 'fixed',
      minHeight: '100vh'
    }
  }, props.miniSidebar), /*#__PURE__*/_react.default.createElement("td", {
    style: {
      paddingLeft: '65px',
      top: '0px',
      width: '100%',
      position: 'absolute'
    }
  }, sidebarToggleCloseButton(), props.mainSidebar)))))));
}