import React from 'react';

const MenuDesktopRootMarkdown = (props) => {

	const imgUrl = "/icons/body/smartphones_and_gadgets.svg"

	// const markdownSpan = {
	// 	// backgroundImage: `url(${props.imgUrl})`,
	// 	// backgroundImage: `url(/icons/body/${props.imgName})`,
	// 	// background: `yellow`,
	// 	backgroundPosition: '50%',
	// 	backgroundRepeat: 'no-repeat',
	// 	backgroundSize: 'contain',
	// 	display: 'inline-block',
	// 	height: '25px',
	// 	marginRight: '24px',
	// 	textAlign: 'center',
	// 	verticalAlign: 'middle',
	// 	width: '25px',
	// };

	return (
		<div className="menu-desktop-root-markdown">
			{/*<span className="menu-desktop-root-icon" style={{backgroundImage: `url(${props.imgUrl})`}}></span>*/}
			<span className="menu-desktop-root-icon" style={{backgroundImage: `url(${imgUrl})`}}></span>
			{/*<span className="menu-desktop-root-icon"></span>*/}
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