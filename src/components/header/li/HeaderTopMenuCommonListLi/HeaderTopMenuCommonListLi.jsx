import React from 'react';
import classes from './HeaderTopMenuCommonListLi.module.scss'

const HeaderTopMenuCommonListLi = (props) => {
	return (
		<li className={classes.headerTopmenuCommonListItem}>
			<a className={classes.headerTopmenuCommonLink} href="/src/components/header/li/HeaderTopMenuCommonListLi/HeaderTopMenuCommonListLi">{props.name}</a>
		</li>
	);
};

export default HeaderTopMenuCommonListLi;