import React from 'react';

const MenuDesktopRoot = () => {
	return (
		<div className="menu-desktop-root">
			<span className="menu-desktop-root-icon"></span>
			<div className="menu-desktop-root-info">
				<a className="ui-link-menu-desktop-root-title" href="/#">Бытовая техника</a>
				<div className="menu-desktop-root-subtitles">
					<a className="ui-link-menu-desktop-root-subtitle-left" href="/#">для дома</a>
					<a className="ui-link-menu-desktop-root-subtitle-right" href="/#">уход за собой</a>
				</div>
			</div>
		</div>
	);
};

export default MenuDesktopRoot;