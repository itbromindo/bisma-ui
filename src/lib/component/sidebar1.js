import React, { useCallback, useEffect, useState } from 'react';

export default function Sidebar1(props) {

    const [currPathname, setCurrPathname] = useState();

    useEffect(() => {
        setCurrPathname(window.location.pathname);
    }, [])

    const dropdownStyle = {
        width: '100%',
        padding: '10px',
        outline: 'none',
        border: '1px solid #518ff4',
        color: '#25396f',
        borderRadius: '10px',
        backgroundColor: '#EAF2FF'
    }

    const sidebarToggleCloseButton = () => {
        return <table>
            <tbody>
                <tr>
                    <td style={{ width: '95%' }}></td>
                    <td>
                        <div className="toggler">
                            <button className="btn icon icon-left btn-light sidebar-hide d-xl-none d-block">
                                <i className="bi bi-x bi-middle" onClick={(e) => props.updateSidebarStatus('')} style={{ fontSize: '25pt' }}></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    }

    const moduleList = useCallback(() => {
        if (!props.module || props.module.length <= 0) return <></>;
        
        if (typeof window !== "undefined") {
            let k = 0,
                value = props.module[0];
            
            for (let i = 0; i < props.module.length; i++) {
                const el = props.module[i];
                if (el.url == currPathname) value = el.url;
            }

            return <select style={dropdownStyle} onChange={(e) => document.location.href = e.target.value} value={value}>
                {
                    props.module.map(
                        (i) => <option key={k++} value={i.url}>
                            {i.title}
                        </option>
                    )
                }
            </select>;
        }
        
        return <select style={dropdownStyle}></select>;
    }, [props.module, currPathname])

    return (
        <div id="sidebar" className={props.sidebarStatus}>
            <div className="sidebar-wrapper active">
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
                                <td style={{ paddingLeft: '65px', top: '0px', width: '100%', position: 'absolute' }}>
                                    {sidebarToggleCloseButton()}
                                    <ul className="menu">
                                        <li className="sidebar-title">Modul Bisma</li>
                                        <li className="sidebar-item" style={{ borderBottom: '1px solid #D4D4D4', paddingBottom: '10px', marginBottom: '10px' }}>
                                            {moduleList()}
                                        </li>
                                        {props.mainSidebar}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}