"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar1;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Sidebar1(props) {
  const [currPathname, setCurrPathname] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    setCurrPathname(window.location.pathname);
  }, []);
  const dropdownStyle = {
    width: '100%',
    padding: '10px',
    outline: 'none',
    border: '1px solid #518ff4',
    color: '#25396f',
    borderRadius: '10px',
    backgroundColor: '#EAF2FF'
  };

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

  const moduleList = (0, _react.useCallback)(() => {
    if (!props.module || props.module.length <= 0) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

    if (typeof window !== "undefined") {
      let k = 0,
          value = props.module[0];

      for (let i = 0; i < props.module.length; i++) {
        const el = props.module[i];
        if (el.url == currPathname) value = el.url;
      }

      return /*#__PURE__*/_react.default.createElement("select", {
        style: dropdownStyle,
        onChange: e => document.location.href = e.target.value,
        value: value
      }, props.module.map(i => /*#__PURE__*/_react.default.createElement("option", {
        key: k++,
        value: i.url
      }, i.title)));
    }

    return /*#__PURE__*/_react.default.createElement("select", {
      style: dropdownStyle
    });
  }, [props.module, currPathname]);
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
  }, props.profile)), /*#__PURE__*/_react.default.createElement("td", {
    style: {
      paddingLeft: '65px',
      top: '0px',
      width: '100%',
      position: 'absolute'
    }
  }, sidebarToggleCloseButton(), /*#__PURE__*/_react.default.createElement("ul", {
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
  }, moduleList()), props.mainSidebar))))))));
}