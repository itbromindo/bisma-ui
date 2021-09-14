"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Template1;

require("core-js/modules/web.dom-collections.iterator.js");

var _sidebar = _interopRequireDefault(require("./sidebar1"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Template1(props) {
  const [sidebarStatus, setSidebarStatus] = (0, _react.useState)('active');
  (0, _react.useEffect)(() => {
    var w = window.innerWidth;

    if (w < 768) {
      setSidebarStatus('');
    } else {
      setSidebarStatus('active');
    }

    window.addEventListener('resize', event => {
      var w = window.innerWidth;

      if (w < 1200) {
        setSidebarStatus('');
      } else {
        setSidebarStatus('active');
      }
    });
  }, []);

  const updateSidebarStatus = val => setSidebarStatus(val);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_sidebar.default, {
    profile: props.profile,
    module: props.module,
    sidebarStatus: sidebarStatus,
    updateSidebarStatus: updateSidebarStatus,
    miniSidebar: props.miniSidebar,
    mainSidebar: props.mainSidebar
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "main",
    className: "layout-navbar"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand navbar-light "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "PT Bromindo Mekar Mitra"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn icon icon-left btn-light burger-btn d-block d-xl-none",
    onClick: e => setSidebarStatus(sidebarStatus === 'active' ? '' : 'active')
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-justify fs-3"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    id: "main-content"
  }, props.content, /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer clearfix mb-0 text-muted"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "float-end"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Bisma")))))));
}