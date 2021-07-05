import React from 'react';

export default function Sidebar2(props) {

    return (
        <div id="sidebar" className={props.sidebarStatus}>
            <div className="sidebar-wrapper active" style={{ width: "65px" }}>
                <div className="sidebar-menu">
                    <table style={{ minHeight: '100vh', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ zIndex: 1,backgroundColor: '#EAF2FF', position: 'fixed', minHeight: '100vh' }}>
                                    {props.miniSidebar}
                                    <div className="mini-sidebar" style={{ position: 'fixed', bottom: '0px', padding: '0px 5px 20px 5px' }}>
                                        {props.profile}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}