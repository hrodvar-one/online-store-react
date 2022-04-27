import React from 'react';
import HeaderTopMenuCommonListItemDropdownLinkChild from "../../a/HeaderTopMenuCommonListItemDropdownLinkChild";

const HeaderTopMenuCommonListItemDropdown = () => {
	const onOffHeaderDropdownMenu = () => {
		let span = document.getElementById('header-topmenu-common-list-item-dropdown-childs')
		if (span.style.display === 'none') {
			span.style.display = 'block'
		}	else if (span.style.display === 'block') {
			span.style.display = 'none'
		}
	}

	return (
		<li className="header-topmenu-common-list-item-dropdown" onClick={onOffHeaderDropdownMenu}>
			<span className="header-topmenu-common-link">Покупателям</span>
			<span className="header-top-menu-dropdown-icon"/>
			<ul className="header-topmenu-common-list-item-dropdown-childs" id="header-topmenu-common-list-item-dropdown-childs" style={{display: 'none'}}>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Как оформить заказ"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Доставка"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Способы оплаты"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Бонусная программа"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Узнать статус заказа"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Обмен, возврат, гарантия"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Кредиты"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Сервисные центры"/>
				<HeaderTopMenuCommonListItemDropdownLinkChild name="Политика конфиденциальности"/>
			</ul>
		</li>
	);
};

export default HeaderTopMenuCommonListItemDropdown;