import React from 'react';
import classes from './HeaderTopMenuCommonListItemDropdownLinkChild.module.scss'

const HeaderTopMenuCommonListItemDropdownLinkChild = (props) => {
	return (
		<a className={classes.HeaderTopMenuCommonListItemDropdownLinkChild} href="/inet order individual/">{props.name}</a>
	);
};

export default HeaderTopMenuCommonListItemDropdownLinkChild;