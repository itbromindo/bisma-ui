"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _submenuList = _interopRequireDefault(require("./submenuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Menu(props) {
  const [hasSubClass, setHasSubClass] = (0, _react.useState)('');
  const [currPathname, setCurrPathname] = (0, _react.useState)();
  const [childrenVisibility, setChildrenVisibility] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // console.log('props.children menu', props.children);
    if (props.children !== undefined) {
      setHasSubClass('has-sub');
      checkIfChildrenIsActive();
    }

    setCurrPathname(window.location.pathname);
  }, [props.children]);

  const checkIfChildrenIsActive = () => {
    for (let i = 0; i < props.children.length; i++) {
      const el = props.children[i];
      const url = el.props.url;
      const isActive = url == window.location.pathname;
      if (isActive) setChildrenVisibility(true);
    }
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item " + (props.url == currPathname ? 'active' : '') + ' ' + hasSubClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-link",
    onClick: _ => {
      setChildrenVisibility(!childrenVisibility);
    },
    style: {
      cursor: 'pointer'
    }
  }, props.content), props.children !== undefined ? /*#__PURE__*/_react.default.createElement(_submenuList.default, {
    active: childrenVisibility ? 1 : 0
  }, props.children) : '');
}