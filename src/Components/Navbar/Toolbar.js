import React from 'react';
import './Toolbar.css'
import DrawerToggleBtn from './DrawerToggleBtn';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="drawer-toggle-btn">
                <DrawerToggleBtn onClick={props.drawerBtnClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">Responsive Navbar</a></div>
            <div className="spacer" />
            <div className="toolbar__navigation__items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Cart</a></li>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;