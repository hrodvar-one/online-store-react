import './App.scss';
import React from "react";
import HeaderTopMenuCommonListLi from "./components/header/li/HeaderTopMenuCommonListLi/HeaderTopMenuCommonListLi";
import DropdownLink from "./components/header/DropdownLink/DropdownLink";
import MenuDesktopRoot from "./components/container/MenuDesktopRoot/MenuDesktopRoot";

function App() {
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
											<div className="select-city-hover">
												<i className="location-icon"/>
												<p>Омск</p>
												<i className="arrow-icon"/>
											</div>
										</div>
									</div>
								</div>
							</li>
							<HeaderTopMenuCommonListLi name="Магазины"/>
							<DropdownLink/>
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
				<nav className="header-bottom-slide">
					<div className="header-search-container">
						<div className="header-menu-wrapper">
							<div className="logo-container">
								<a id="header-logo" className="logo" href="/">{null}</a>
							</div>
							<form className="presearch">
								<div className="ui-input-search-presearch">
									<input className="ui-input-search" name="q" type="search" placeholder="Поиск по сайту" autoComplete="off"></input>
									{/*<div className="presearch-suggests-hidden"></div>*/}
									<div className="ui-input-search-buttons">
										<span className="ui-input-search-icon-clear"></span>
										<span className="ui-input-search-icon-search"></span>
									</div>
								</div>
							</form>
							<div className="buttons">
								<a className="ui-link-compare-link" href="/">
									<span className="compare-link-badge-empty"></span>
									<span className="compare-link-icon"></span>
									<span className="compare-link-label">Сравнить</span>
								</a>
								<a className="ui-link-wishlist-link" href="/">
									<span className="wishlist-link-badge_empty"></span>
									<span className="wishlist-link-icon"></span>
									<span className="wishlist-link-label">Избранное</span>
								</a>
								<a className="ui-link-cart-link" href="/">
									<span className="cart-link-badge-empty"></span>
									<span className="cart-link-icon"></span>
									<span className="cart-link-label">Корзина</span>
								</a>
							</div>
							<div className="header_user-menu">
								<div id="user-menu">
									<div className="user-menu">
										<div className="user-notifications_counter user-profile__counter" style={{display: 'none'}}></div>
										<div className="user-profile__login">
											<div className="user-notifications__counter user-profile__counter user-profile__guest-counter" style={{display: 'none'}}></div>
											<i className="user-profile__login-icon">

											</i>
											Войти
										</div>
										<div className="user-profile__menu">

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
            <div className="container">
				<div className="homepage-top-grid">
					<div className="homepage-top-grid-menu">
						<div className="menu-desktop">
							<MenuDesktopRoot title="Бытовая техника" leftSubtitle="для дома" rightSubtitle="уход за собой"/>
							<MenuDesktopRoot title="Смартфоны и гаджеты" leftSubtitle="планшеты" rightSubtitle="фототехника"/>
							<MenuDesktopRoot title="ТВ и мультимедиа" leftSubtitle="аудио" rightSubtitle="видеоигры"/>
							<MenuDesktopRoot title="Компьютеры" leftSubtitle="комплектующие" rightSubtitle="ноутбуки"/>
							<MenuDesktopRoot title="Офис и сеть" leftSubtitle="кресла" rightSubtitle="проекторы"/>
							<MenuDesktopRoot title="Отдых и развлечения" leftSubtitle="электросамокаты" rightSubtitle="мангалы"/>
							<MenuDesktopRoot title="Инструменты" leftSubtitle="аккумуляторные" rightSubtitle="садовые"/>
							<MenuDesktopRoot title="Строительство и ремонт" leftSubtitle="электрика" rightSubtitle="сантехника"/>
							<MenuDesktopRoot title="Дом, декор и кухня" leftSubtitle="зоотовары" rightSubtitle="посуда"/>
							<MenuDesktopRoot title="Автотовары" leftSubtitle="звук" rightSubtitle="автокресла"/>
							<MenuDesktopRoot title="Аксессуары и услуги" leftSubtitle="наушники" rightSubtitle="мыши"/>
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
