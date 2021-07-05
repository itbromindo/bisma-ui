import Sidebar1 from './sidebar1';
import React, { useEffect, useState } from 'react';

export default function Template1(props) {

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

    const updateSidebarStatus = (val) => setSidebarStatus(val)

    return (
        <div>
            <Sidebar1 
                profile={props.profile}
                module={props.module}
                sidebarStatus={sidebarStatus} 
                updateSidebarStatus={updateSidebarStatus} 
                miniSidebar={props.miniSidebar}
                mainSidebar={props.mainSidebar}
            />
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
                    {props.content}

                    <footer>
                        <div className="footer clearfix mb-0 text-muted">
                            <div className="float-end">
                                <p>Bisma</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )

}