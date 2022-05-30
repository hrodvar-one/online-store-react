import React from 'react';

const MenuDesktopRoot = (props) => {
	return (
		<div className="menu-desktop-root">
			<span className="menu-desktop-root-icon"></span>
			<div className="menu-desktop-root-info">
				<a className="ui-link-menu-desktop-root-title" href="/#">{props.title}</a>
				<div className="menu-desktop-root-subtitles">
					<a className="ui-link-menu-desktop-root-subtitle-left" href="/#">{props.leftSubtitle}</a>
					<a className="ui-link-menu-desktop-root-subtitle-right" href="/#">{props.rightSubtitle}</a>
				</div>
			</div>
		</div>
	);
};

export default MenuDesktopRoot;