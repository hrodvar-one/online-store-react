import React from 'react';
import classes from './HeaderTopMenuCommonListLi.module.scss'

const HeaderTopMenuCommonListLi = () => {
	return (
		<li className={classes.headerTopmenuCommonListItem}>
			<a className={classes.headerTopmenuCommonLink} href="/shops/omsk/">Магазины</a>
		</li>
	);
};

export default HeaderTopMenuCommonListLi;