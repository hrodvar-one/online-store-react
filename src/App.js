import './App.scss';
import React from "react";
import HeaderTopMenuCommonListLi from "./components/header/li/HeaderTopMenuCommonListLi/HeaderTopMenuCommonListLi";
import DropdownLink from "./components/header/DropdownLink/DropdownLink";

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
											<i className="location-icon"/>
											<p>Омск </p>
											<i className="arrow-icon"/>
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
								<a id="header-logo" className="logo" href="/"> </a>
								<span className="catalog-spoiler">
									<i className="chevron"></i>
								</span>
							</div>
							<form id="" action="/search" method="get" className="presearch" data-role="presearch-form">
								<div className="ui-input-search-presearch-container">
									<input className="ui-input-search-presearch" name="q" value type="search" placeholder="Поиск по сайту"/>
									<div className="presearch-suggests-hidden"></div>
									<div className="ui-input-search-buttons">
										<span className=""></span>
										<span className="ui-input-search-icon-ui-input-search"></span>
									</div>
								</div>
							</form>
							<div className="buttons">
								<a className="ui-link compare-link" href="/compare">
									<span className="compare-link-badge-compare-link-badge-empty"></span>
									<span className="compare-link-icon"></span>
									<span className="compare-link-lbl">Сравнить</span>
								</a>
								<a className="ui-link-wishlist-link" href="/wishlist/index/">
									<span className="wishlist-link-badge-wishlist-link-badge-empty"></span>
									<span className="wishlist-link-icon"></span>
									<span className="wishlist-link-lbl">Избранное</span>
								</a>
								<a className="ui-link-cart-link" href="https://dns-shop.ru/cart/">
									<span className="wishlist-link-badge-wishlist-link-badge-empty"></span>
									<span className="wishlist-link-icon"></span>
									<span className="wishlist-link-lbl">Корзина</span>
								</a>
							</div>
							<div className="header-login">
								<button className="button-ui button-ui-white-header-login-button" data-role="login-button">Войти</button>
							</div>
						</div>
						<div className="menu-desktop-wrap">
							<div className="menu-desktop-wrap-sub">
								<span className="menu-desktop menu-desktop-ph"></span>
							</div>
						</div>
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
