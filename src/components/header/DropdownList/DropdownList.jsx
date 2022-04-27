import React from 'react';
import HeaderTopMenuCommonListItemDropdownLinkChild from "../a/HeaderTopMenuCommonListItemDropdownLinkChild";

const DropdownList = () => {
	return (
		<ul className="header-topmenu-common-list-item-dropdown-childs">
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
	);
};

export default DropdownList;