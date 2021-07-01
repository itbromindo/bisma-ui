import Dashboard from './icons/dashboard.svg';
import Notification from './icons/notification.svg';
import SomeIcon from './icons/some-icon.svg';

export default function Sidebar() {

    return (
        <div>
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active">
                    <div className="sidebar-menu">
                        <table style={{ minHeight: '100vh' }}>
                            <tr>
                                <td style={{ backgroundColor: '#EAF2FF' }}>
                                    <table>
                                        <tr>
                                            <td>
                                                <img src={Dashboard} alt="Dashboard" width="45px" style={{ margin: '10px' }} />
                                            </td>
                                        </tr>
                                            <td>
                                                <img src={Notification} alt="Notification" width="45px" style={{ margin: '10px' }} />
                                            </td>
                                        <tr>
                                            <td>
                                                <img src={SomeIcon} alt="" width="45px" style={{ margin: '10px' }} />
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <ul className="menu">
                                        <li className="sidebar-title">Menu</li>

                                        <li className="sidebar-item active ">
                                            <a href="index.html" class='sidebar-link'>
                                                <i></i>
                                                <span>Dashboard</span>
                                            </a>
                                        </li>

                                        <li className="sidebar-item  has-sub">
                                            <a href="#" class='sidebar-link'>
                                                <i></i>
                                                <span>Components</span>
                                            </a>
                                            <ul className="submenu ">
                                                <li className="submenu-item ">
                                                    <a href="component-alert.html">Alert</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-badge.html">Badge</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-breadcrumb.html">Breadcrumb</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-button.html">Button</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-card.html">Card</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-carousel.html">Carousel</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-dropdown.html">Dropdown</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-list-group.html">List Group</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-modal.html">Modal</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-navs.html">Navs</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-pagination.html">Pagination</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-progress.html">Progress</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-spinner.html">Spinner</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="component-tooltip.html">Tooltip</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="sidebar-item  has-sub">
                                            <a href="#" class='sidebar-link'>
                                                <i></i>
                                                <span>Extra Components</span>
                                            </a>
                                            <ul className="submenu ">
                                                <li className="submenu-item ">
                                                    <a href="extra-component-avatar.html">Avatar</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="extra-component-sweetalert.html">Sweet Alert</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="extra-component-toastify.html">Toastify</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="extra-component-rating.html">Rating</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="extra-component-divider.html">Divider</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="sidebar-item  has-sub">
                                            <a href="#" class='sidebar-link'>
                                                <i></i>
                                                <span>Layouts</span>
                                            </a>
                                            <ul className="submenu ">
                                                <li className="submenu-item ">
                                                    <a href="layout-default.html">Default Layout</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="layout-vertical-1-column.html">1 Column</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="layout-vertical-navbar.html">Vertical with Navbar</a>
                                                </li>
                                                <li className="submenu-item ">
                                                    <a href="layout-horizontal.html">Horizontal Menu</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                </div>
            </div>
            <div id="main">
                <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3"></i>
                </a>
                </header>
            
                <div className="page-heading">
                <h3>Profile Statistics</h3>
                </div>
                <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="row">
                            <div className="col-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Latest Comments</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-lg">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Comment</th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                            <tr>
                                                <td className="col-3">
                                                    <div className="d-flex align-items-center">
                                                        <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                    </div>
                                                </td>
                                            <td className="col-auto">
                                                <p className=" mb-0">Congratulations on your graduation!</p>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="col-3">
                                                <div className="d-flex align-items-center">
                                                <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                </div>
                                            </td>
                                            <td className="col-auto">
                                                <p className=" mb-0">Wow amazing design! Can you make another
                                                tutorial for
                                                this design?</p>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            
                <footer>
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-end">
                            <p>Bisma</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )

}