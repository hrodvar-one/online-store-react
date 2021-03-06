import React from 'react';

const MenuDesktopRootMarkdown = (props) => {
	return (
		<div className="menu-desktop-root-markdown">
			<span className="menu-desktop-root-icon" style={{backgroundImage: `url(/icons/body/${props.imgName})`}}></span>
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

export default MenuDesktopRootMarkdown;