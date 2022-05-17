import React, { useState } from 'react';
import onClickOutside from "react-onclickoutside";
import DropdownList from "../DropdownList/DropdownList";

function DropdownLink (props) {
	const [showDropdown, setShowDropdown] = useState(false);

	DropdownLink.handleClickOutside = () => {
		setShowDropdown(false);
		setStyle("header-top-menu-dropdown-icon");
	};

	const [style, setStyle] = useState("header-top-menu-dropdown-icon");

	const changeStyle = () => {
		console.log("you just clicked");
		setStyle("header-top-menu-dropdown-icon-rotate")
		if (style === 'header-top-menu-dropdown-icon-rotate') {
			setStyle("header-top-menu-dropdown-icon");
		}
	};

	return (
		<li className="header-topmenu-common-list-item-dropdown" onClick={() => {setShowDropdown(!showDropdown);changeStyle();}}>
			<span className="header-topmenu-common-link">Покупателям</span>
			<span className={style}/>
			{showDropdown ? <DropdownList /> : null}
		</li>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => DropdownLink.handleClickOutside,
};

export default onClickOutside(DropdownLink, clickOutsideConfig);