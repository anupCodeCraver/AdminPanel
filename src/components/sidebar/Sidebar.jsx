import React from 'react';
import {NavLink} from 'react-router-dom'
import './sidebar.css';

import {LineStyle,TrendingUp,Timeline,PermIdentity,
    Storefront,BarChart,MailOutline,DynamicFeed,
    ChatBubbleOutline,Report,WorkOutline,PaidOutlined} from '@mui/icons-material/';

export default function Sidebar() {
    return (
        <div className='sidebarContainer'>
            <div className="sidbarMenuWrapper">
                <div className="sidebarmenu">
                    <h6 className="sidebarTitle">Dashboard</h6>
                    <ul className="sidebarlist">
                        <NavLink to='/' className='link'>
                        <li className="sidebarListItem"> 
                            <LineStyle className='listIcon'/>
                            Home
                        </li>
                        </NavLink>
                        <li className="sidebarListItem">
                            <Timeline className='listIcon'/>
                         Analytics
                        </li> <li className="sidebarListItem">
                            <TrendingUp className='listIcon'/>
                          Scale
                 </li> 
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h6 className="sidebarTitle">Quick Menu</h6>
                    <ul className="sidebarlist">
                        <NavLink to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className='listIcon'/>
                            users
                        </li>
                        </NavLink>
                        <NavLink to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className='listIcon'/>
                    Products
                        </li>
                        </NavLink>
                        <li className="sidebarListItem">
                            <PaidOutlined  className='listIcon'/>
                         Transactions
                 </li>  
                        <li className="sidebarListItem">
                            <BarChart  className='listIcon'/>
                            Reports
                 </li> 
                    </ul>   
                </div>
                <div className="sidebarmenu">
                    <h6 className="sidebarTitle">Notification</h6>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            <MailOutline className='listIcon'/>
                         Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='listIcon'/>
                         Feedback
                        </li> <li className="sidebarListItem">
                            <ChatBubbleOutline className='listIcon'/>
                    Messages
                 </li> 
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h6 className="sidebarTitle">Staff</h6>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                            <WorkOutline className='listIcon'/>
                          Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='listIcon'/>
                         Analytics
                        </li> <li className="sidebarListItem">
                            <Report className='listIcon'/>
                        Reports
                 </li> 
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
