import './App.scss';
import React, {useState} from "react";
import HeaderTopMenuCommonListLi from "./components/header/li/HeaderTopMenuCommonListLi";
import HeaderTopMenuCommonListItemDropdownLinkChild from "./components/header/a/HeaderTopMenuCommonListItemDropdownLinkChild";

function App() {

	// const state = useState(0)
	const [count, setCount] = useState(0)

	function onOffDropdownList() {

	}

	console.log(count)
	console.log(setCount)

	return (
		<div className="App">
			<header className="header">
				<div className="header-topmenu">
					<div className="header-topmenu-container">
						<ul className="header-topmenu-common-list">
							<li className="header-topmenu-common-list-item">
								<div className="header-topmenu-common-link-city">
									<div className="select-city-widget">
										<div className="select-city-widget-label">
											<i className="location-icon"/>
											<p>Омск </p>
											<i className="arrow-icon"/>
										</div>
									</div>
								</div>
							</li>
							<HeaderTopMenuCommonListLi name="Магазины"/>
							<li className="header-topmenu-common-list-item-dropdown">
								<a className="header-topmenu-common-link" href="/shops/omsk/" onClick={onOffDropdownList}>Покупателям</a>
								<span className="header-top-menu-dropdown-icon"/>
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
							</li>
							<HeaderTopMenuCommonListLi name="Юридическим лицам"/>
							<HeaderTopMenuCommonListLi name="Клуб BNS"/>
						</ul>
						<ul className="header-topmenu-profile-list">
							<li className="header-topmenu-profile-list-item">
								<span className="header-topmenu-profile-list-item-span-phone">
									{'  '}9-900-99-09-9 99{'  '}
								</span>
								<span className="header-topmenu-profile-list-item-span-info">
								(c 06:00 до 01:00)
								</span>
							</li>
						</ul>
					</div>
				</div>
				<nav className="header-search">
					<div className="header-search-container">

					</div>
				</nav>
			</header>
            <div className="container">
				<div className="homepage-top-grid">
					<div className="homepage-top-grid-menu">
						<div className="menu-desktop">
						</div>
					</div>
					<div className="homepage-top-grid-center">

					</div>
				</div>
				<div className="homepage-top-grid-banner">

				</div>
				<div className="homepage-stories-desktop">
					<div className="homepage-stories">

					</div>
				</div>
				<div className="homepage-actual-offers-category-block">

				</div>
				<div className="homepage-benefits">

				</div>
				<div className="viewed-products-slider">

				</div>
            </div>
			<footer className="main-footer">

			</footer>
		</div>
	);
}

export default App;
