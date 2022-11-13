import React from 'react';
import './Navbar.css'
import { NotificationsNone,Language,Settings } from '@mui/icons-material';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="containerWrapper">
                <div className="leftContainer">
                    <span className="leftspan">APAdmin</span>
                </div>
                <div className="rightContainer">
                    <div className="rigthIconContainer">
                        <NotificationsNone className='notifiationIcon' />
                        <span className="righttext">2</span>
                    </div>
                    <div className="rigthIconContainer">
                        <Language className='notifiationIcon' />
                        <span className="righttext">2</span>
                    </div>
                     <div className="rigthIconContainer">
                        <Settings className='notifiationIcon' />
                    </div>
                    <img className='navbarAdminImg'alt='' src='https://img.freepik.com/free-photo/close-up-portrait-wonderful-child-with-shiny-brown-eyes-looking-with-interest-enthusiastic-little-girl-vintage-straw-hat-decorated-with-ribbon-posing-during-game-park_197531-3960.jpg?w=2000'></img>
                </div>
            </div>
        </div>
    )
}
