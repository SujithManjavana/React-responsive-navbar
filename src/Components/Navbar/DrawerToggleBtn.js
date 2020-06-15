import React from "react";
import "./DrawerToggleBtn.css"

const drawerToggleBtn = props => (
    <button onClick={props.onClick} className="toggle-btn">
        <div className="toggle-btn__line" />
        <div className="toggle-btn__line" />
        <div className="toggle-btn__line" />
    </button>
);

export default drawerToggleBtn;