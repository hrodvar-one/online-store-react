import React, { useState } from 'react';
import onClickOutside from "react-onclickoutside";
import DropdownList from "../DropdownList/DropdownList";

function DropdownLink (props) {
	const [showDropdown, setShowDropdown] = useState(false);

	DropdownLink.handleClickOutside = () => {
		setShowDropdown(false);
	};

	return (
		<li className="header-topmenu-common-list-item-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
			<span className="header-topmenu-common-link">Покупателям</span>
			<span className="header-top-menu-dropdown-icon"/>
			{showDropdown ? <DropdownList /> : null}
		</li>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => DropdownLink.handleClickOutside,
};

export default onClickOutside(DropdownLink, clickOutsideConfig);