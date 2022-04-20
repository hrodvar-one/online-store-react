import React from 'react';
import classes from "../li/HeaderTopMenuCommonListLi.module.scss";

const HeaderTopMenuCommonListLiTest = (props) => {
	return (
		<li className={classes.headerTopmenuCommonListItem}>
			<a className={classes.headerTopmenuCommonLink} href="/shops/omsk/">{props.name}</a>
		</li>
	);
};
export default HeaderTopMenuCommonListLiTest;