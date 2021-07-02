"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Dashboard from './assets/icons/dashboard.svg';
// import Notification from './assets/icons/notification.svg';
// import SomeIcon from './assets/icons/some-icon.svg';
function Sidebar() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "sidebar",
    className: "active"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-wrapper active"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-menu"
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      backgroundColor: '#EAF2FF'
    }
  }), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-title"
  }, "Menu"), /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item active "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "index.html",
    class: "sidebar-link"
  }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("span", null, "Dashboard"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("span", null, "Components")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-alert.html"
  }, "Alert")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-badge.html"
  }, "Badge")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-breadcrumb.html"
  }, "Breadcrumb")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-button.html"
  }, "Button")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-card.html"
  }, "Card")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-carousel.html"
  }, "Carousel")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-dropdown.html"
  }, "Dropdown")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-list-group.html"
  }, "List Group")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-modal.html"
  }, "Modal")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-navs.html"
  }, "Navs")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-pagination.html"
  }, "Pagination")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-progress.html"
  }, "Progress")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-spinner.html"
  }, "Spinner")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "component-tooltip.html"
  }, "Tooltip")))), /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("span", null, "Extra Components")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "extra-component-avatar.html"
  }, "Avatar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "extra-component-sweetalert.html"
  }, "Sweet Alert")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "extra-component-toastify.html"
  }, "Toastify")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "extra-component-rating.html"
  }, "Rating")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "extra-component-divider.html"
  }, "Divider")))), /*#__PURE__*/_react.default.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/_react.default.createElement("i", null), /*#__PURE__*/_react.default.createElement("span", null, "Layouts")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "layout-default.html"
  }, "Default Layout")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "layout-vertical-1-column.html"
  }, "1 Column")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "layout-vertical-navbar.html"
  }, "Vertical with Navbar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "layout-horizontal.html"
  }, "Horizontal Menu")))))))))), /*#__PURE__*/_react.default.createElement("button", {
    className: "sidebar-toggler btn x"
  }, /*#__PURE__*/_react.default.createElement("i", {
    "data-feather": "x"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    id: "main"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "burger-btn d-block d-xl-none"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-justify fs-3"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "page-heading"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Profile Statistics")), /*#__PURE__*/_react.default.createElement("div", {
    className: "page-content"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12 col-xl-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Latest Comments")), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table table-hover table-lg"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Name"), /*#__PURE__*/_react.default.createElement("th", null, "Comment"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "col-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold ms-3 mb-0"
  }, "Si Cantik"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: " mb-0"
  }, "Congratulations on your graduation!"))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "col-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold ms-3 mb-0"
  }, "Si Ganteng"))), /*#__PURE__*/_react.default.createElement("td", {
    className: "col-auto"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: " mb-0"
  }, "Wow amazing design! Can you make another tutorial for this design?"))))))))))))), /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer clearfix mb-0 text-muted"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "float-end"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Bisma"))))));
}