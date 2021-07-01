"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _dashboard = _interopRequireDefault(require("./icons/dashboard.svg"));

var _notification = _interopRequireDefault(require("./icons/notification.svg"));

var _someIcon = _interopRequireDefault(require("./icons/some-icon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "sidebar",
    className: "active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-wrapper active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-menu"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      backgroundColor: '#EAF2FF'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
    src: _dashboard.default,
    alt: "Dashboard",
    width: "45px",
    style: {
      margin: '10px'
    }
  }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
    src: _notification.default,
    alt: "Notification",
    width: "45px",
    style: {
      margin: '10px'
    }
  })), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
    src: _someIcon.default,
    alt: "",
    width: "45px",
    style: {
      margin: '10px'
    }
  }))))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "sidebar-title"
  }, "Menu"), /*#__PURE__*/React.createElement("li", {
    className: "sidebar-item active "
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    class: "sidebar-link"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Dashboard"))), /*#__PURE__*/React.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Components")), /*#__PURE__*/React.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-alert.html"
  }, "Alert")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-badge.html"
  }, "Badge")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-breadcrumb.html"
  }, "Breadcrumb")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-button.html"
  }, "Button")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-card.html"
  }, "Card")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-carousel.html"
  }, "Carousel")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-dropdown.html"
  }, "Dropdown")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-list-group.html"
  }, "List Group")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-modal.html"
  }, "Modal")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-navs.html"
  }, "Navs")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-pagination.html"
  }, "Pagination")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-progress.html"
  }, "Progress")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-spinner.html"
  }, "Spinner")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "component-tooltip.html"
  }, "Tooltip")))), /*#__PURE__*/React.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Extra Components")), /*#__PURE__*/React.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "extra-component-avatar.html"
  }, "Avatar")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "extra-component-sweetalert.html"
  }, "Sweet Alert")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "extra-component-toastify.html"
  }, "Toastify")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "extra-component-rating.html"
  }, "Rating")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "extra-component-divider.html"
  }, "Divider")))), /*#__PURE__*/React.createElement("li", {
    className: "sidebar-item  has-sub"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    class: "sidebar-link"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, "Layouts")), /*#__PURE__*/React.createElement("ul", {
    className: "submenu "
  }, /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "layout-default.html"
  }, "Default Layout")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "layout-vertical-1-column.html"
  }, "1 Column")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "layout-vertical-navbar.html"
  }, "Vertical with Navbar")), /*#__PURE__*/React.createElement("li", {
    className: "submenu-item "
  }, /*#__PURE__*/React.createElement("a", {
    href: "layout-horizontal.html"
  }, "Horizontal Menu"))))))))), /*#__PURE__*/React.createElement("button", {
    className: "sidebar-toggler btn x"
  }, /*#__PURE__*/React.createElement("i", {
    "data-feather": "x"
  })))), /*#__PURE__*/React.createElement("div", {
    id: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "burger-btn d-block d-xl-none"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-justify fs-3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "page-heading"
  }, /*#__PURE__*/React.createElement("h3", null, "Profile Statistics")), /*#__PURE__*/React.createElement("div", {
    className: "page-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-xl-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("h4", null, "Latest Comments")), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover table-lg"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Comment"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "col-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold ms-3 mb-0"
  }, "Si Cantik"))), /*#__PURE__*/React.createElement("td", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: " mb-0"
  }, "Congratulations on your graduation!"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "col-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold ms-3 mb-0"
  }, "Si Ganteng"))), /*#__PURE__*/React.createElement("td", {
    className: "col-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: " mb-0"
  }, "Wow amazing design! Can you make another tutorial for this design?"))))))))))))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer clearfix mb-0 text-muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "float-end"
  }, /*#__PURE__*/React.createElement("p", null, "Bisma"))))));
}