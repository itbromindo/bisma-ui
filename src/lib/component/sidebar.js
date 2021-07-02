import React, { useEffect, useState } from 'react';
import Dashboard from './assets/icons/dashboard.svg';
import Notification from './assets/icons/notification.svg';
import SomeIcon from './assets/icons/some-icon.svg';
import Menu from './menu';
import MenuList from './menuList';
import SubMenu from './submenu';

export default function Sidebar() {

    const [sidebarStatus, setSidebarStatus] = useState('active');

    useEffect(() => {
        var w = window.innerWidth;
        if (w < 768) {
            setSidebarStatus('');
        } else {
            setSidebarStatus('active');
        }
        
        window.addEventListener('resize', (event) => {
            var w = window.innerWidth;
            if (w < 1200) {
                setSidebarStatus('');
            } else {
                setSidebarStatus('active');
            }
        });
    }, [])

    const sidebarButton = () => {
        return <table>
            <tbody>
                <tr>
                    <td>
                        <img src={Dashboard} alt="Dashboard" width="45px" style={{ margin: '10px' }} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={Notification} alt="Notification" width="45px" style={{ margin: '10px' }} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={SomeIcon} alt="" width="45px" style={{ margin: '10px' }} />
                    </td>
                </tr>
            </tbody>
        </table>
    }

    const sidebarToggleCloseButton = () => {
        return <table>
            <tbody>
                <tr>
                    <td style={{ width: '95%' }}></td>
                    <td>
                        <div className="toggler">
                            <button className="btn icon icon-left btn-light sidebar-hide d-xl-none d-block">
                                <i className="bi bi-x bi-middle" onClick={(e) => setSidebarStatus('')} style={{ fontSize: '25pt' }}></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    }

    return (
        <div>
            <div id="sidebar" className={sidebarStatus}>
                <div className="sidebar-wrapper active">
                    <div className="sidebar-menu">
                        <table style={{ minHeight: '100vh', width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td style={{ backgroundColor: '#EAF2FF', position: 'fixed', minHeight: '100vh' }}>
                                        {sidebarButton()}
                                    </td>
                                    <td style={{ paddingLeft: '65px',top: '0px',width: '100%',position: 'absolute' }}>
                                        {sidebarToggleCloseButton()}
                                        <MenuList>
                                            <Menu title="Dashboard" to="/" active="1" />
                                            <Menu title="Sample1" to="/123" active="0" />
                                            <Menu title="Menu" to="/lksandk" active="0">
                                                <SubMenu to="/1" title="Submenu1" />
                                            </Menu>
                                        </MenuList>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="main" className="layout-navbar">
                <header className="mb-3">
                    <nav className="navbar navbar-expand navbar-light ">
                        <div className="container-fluid">
                            <h6>PT Bromindo Mekar Mitra</h6>
                            <button className="btn icon icon-left btn-light burger-btn d-block d-xl-none" onClick={(e) => setSidebarStatus(sidebarStatus === 'active' ? '' : 'active')}>
                                <i className="bi bi-justify fs-3"></i>
                            </button>
                        </div>
                    </nav>
                </header>
                <div id="main-content">
                    <div className="page-heading">
                        <div className="page-title">
                            <div className="row">
                                <div className="col-12 col-md-6 order-md-1 order-last">
                                    <h3>Vertical Layout with Navbar</h3>
                                    <p className="text-subtitle text-muted">Navbar will appear in top of the page.</p>
                                </div>
                                <div className="col-12 col-md-6 order-md-2 order-first">
                                    <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Layout Vertical Navbar
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <section className="section">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Example Content</h4>
                                </div>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas omnis
                                    laudantium tempore
                                    exercitationem, expedita aspernatur sed officia asperiores unde tempora maxime odio
                                    reprehenderit
                                    distinctio incidunt! Vel aspernatur dicta consequatur!
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer>
                        <div className="footer clearfix mb-0 text-muted">
                            <div className="float-start">
                                <p>2021 © Mazer</p>
                            </div>
                            <div className="float-end">
                                <p>Crafted with <span className="text-danger"><i className="bi bi-heart-fill icon-mid"></i></span>
                                    by <a href="https://ahmadsaugi.com">Saugi</a></p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )

}