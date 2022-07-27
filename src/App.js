import './App.scss';
import React from "react";
import HeaderTopMenuCommonListLi from "./components/header/li/HeaderTopMenuCommonListLi/HeaderTopMenuCommonListLi";
import DropdownLink from "./components/header/DropdownLink/DropdownLink";
import MenuDesktopRoot from "./components/container/MenuDesktopRoot/MenuDesktopRoot";
import MenuDesktopRootMarkdown from "./components/container/MenuDesktopRootMarkdown/MenuDesktopRootMarkdown";

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
							<MenuDesktopRoot
								title="Бытовая техника"
								leftSubtitle="для дома"
								rightSubtitle="уход за собой"
								imgName="appliances.svg"
							/>
							<MenuDesktopRoot
								title="Смартфоны и гаджеты"
								leftSubtitle="планшеты"
								rightSubtitle="фототехника"
								imgName="smartphones_and_gadgets.svg"
							/>
							<MenuDesktopRoot
								title="ТВ и мультимедиа"
								leftSubtitle="аудио"
								rightSubtitle="видеоигры"
								imgName="tv_and_multimedia.svg"
							/>
							<MenuDesktopRoot
								title="Компьютеры"
								leftSubtitle="комплектующие"
								rightSubtitle="ноутбуки"
								imgName="computers.svg"
							/>
							<MenuDesktopRoot
								title="Офис и сеть"
								leftSubtitle="кресла"
								rightSubtitle="проекторы"
								imgName="office_and_network.svg"
							/>
							<MenuDesktopRoot
								title="Отдых и развлечения"
								leftSubtitle="электросамокаты"
								rightSubtitle="мангалы"
								imgName="recreation_and_entertainment.svg"
							/>
							<MenuDesktopRoot
								title="Инструменты"
								leftSubtitle="аккумуляторные"
								rightSubtitle="садовые"
								imgName="tools.svg"
							/>
							<MenuDesktopRoot
								title="Строительство и ремонт"
								leftSubtitle="электрика"
								rightSubtitle="сантехника"
								imgName="construction_and_repair.svg"
							/>
							<MenuDesktopRoot
								title="Дом, декор и кухня"
								leftSubtitle="зоотовары"
								rightSubtitle="посуда"
								imgName="home_decor_and_kitchen.svg"
							/>
							<MenuDesktopRoot
								title="Автотовары"
								leftSubtitle="звук"
								rightSubtitle="автокресла"
								imgName="auto_products.svg"
							/>
							<MenuDesktopRoot
								title="Аксессуары и услуги"
								leftSubtitle="наушники"
								rightSubtitle="мыши"
								imgName="accessories_and_services.svg"
							/>
							<MenuDesktopRootMarkdown
								title="Уценённые товары"
								imgName="markdown_products.svg"
							/>
						</div>
					</div>
					<div className="homepage-top-grid-center">
						<div className="homepage-top-grid-banners">
							<a className="homepage-actions-mobile-link" href="/actions/">
								<span>
									Акции
								</span>
								<span className="homepage-actions-mobile-link-all">
									Все
									<span className="homepage-actions-mobile-link-icon"></span>
								</span>
							</a>
							<div className="homepage-slider-wrap" data-role="homepage-banner-slider">
								<div className="tns-outer" id="tns1-ow">
									<div className="tns-controls" aria-label="Carousel Navigation" tabIndex="0">
										<button type="button" data-controls="prev" tabIndex="-1" aria-controls="tns1">
											<div className="icon-arrow-left">
												<i></i>
											</div>
										</button>
										<button type="button" data-controls="next" tabIndex="-1" aria-controls="tns1">
											<div className="icon-arrow-right">
												<i></i>
											</div>
										</button>
									</div>
									<div className="tns-liveregion-visually-hidden" aria-live="polite" aria-atomic="true">
										slide
										<span className="current">12</span>
										of 5
									</div>
									<div id="tns1-mw" className="tns-ovh">
										<div className="tns-inner" id="tns1-iw">
											<div className="homepage-banner-slider-carousel-horizontal"
												 data-role="slider"
												 id="tns1"
												 // style="transform: translated3d(-60%, 0px, 0px);"
											>
											</div>
										</div>
									</div>
								</div>
								<ul className="slider-tabs" data-role="slider-nav" aria-label="Carousel Pagination">
									<li
										className="tabs-bottom"
										data-nav="0"
										aria-label="Carousel Page 1"
										aria-controls="tns1"
										tabIndex="-1"
									>
									</li>
									<li
										className="tabs-bottom"
										data-nav="1"
										aria-label="Carousel Page 2"
										aria-controls="tns1"
										tabIndex="-1"
									>
									</li>
									<li
										className="tabs-bottom"
										data-nav="2"
										aria-label="Carousel Page 3"
										aria-controls="tns1"
										tabIndex="-1"
									>
									</li>
									<li
										className="tabs-bottom"
										data-nav="3"
										aria-label="Carousel Page 4"
										aria-controls="tns1"
										tabIndex="-1"
									>
									</li>
									<li
										className="tabs-bottom"
										data-nav="4"
										aria-label="Carousel Page 5"
										aria-controls="tns1"
										tabIndex="-1"
									>
									</li>
								</ul>
							</div>
						</div>
						<div className="homepage-top-grid-shops">
							<span id="as-a17" className="homepage-shops"></span>
							<span id="as-c53" className="homepage-brands"></span>
						</div>
						<div className="homepage-top-grid-actions">
							<div className="homepage-actions">
								<span className="homepage-actions-logo"></span>
								<a className="homepage-actions-title-ui-link" href="/actions/">
									Акции
									<span className="homepage-actions-title-button">
										<span className="homepage-action-title-icon"></span>
									</span>
								</a>
								<div className="homepage-actions-types">
									<a className="homepage-actions-type-1-ui-link" href="/actions/?types=1">
										Скидки и предложения
										<span className="homepage-actions-type-count">64</span>
									</a>
									<a className="homepage-actions-type-30-ui-link" href="/actions/?types=30">
										Рассрочка или выгода
										<span className="homepage-actions-type-count">17</span>
									</a>
									<a className="homepage-actions-type-80-ui-link" href="/actions/?types=80">
										Выгодные комплекты
										<span className="homepage-actions-type-count">58</span>
									</a>
								</div>
								<div className="homepage-actions-buttons">
									<a className="button-action-all" href="/actions/">Все акции</a>
									<a className="button-action-all-products" href="/catalog/actions/">Все товары</a>
								</div>
							</div>
						</div>
						<div className="homepage-top-grid-menu-mobile">
							<span id="as-786d" className="menu-mobile"></span>
						</div>
						<div className="homepage-top-grid-actual-offers">
							<div className="homepage-actual-offers-main">
								<div className="homepage-actual-offers-main-title">
									Актуальные предложения
								</div>
								<div className="homepage-actual-offers-main-container">
									<div className="tabs-slider" data-tab-slider data-inited>
										<div className="tabs-slider-wrapper-mobile-gray-bg">
											<div className="tns-outer" id="tns4-ow">
												<div className="tns-controls" aria-label="Carousel Navigation" tabIndex="0">
													<button type="button" data-controls="prev" tabIndex="-1" aria-controls="tns4"></button>
													<button type="button" data-controls="next" tabIndex="-1" aria-controls="tns4"></button>
												</div>
												<div className="tns-liveregion-visually-hidden" aria-live="polite" aria-atomic="true">
													slide
													<span className="current">1 to 5 </span>
													of 5
												</div>
												<div id="tns4-mw" className="tns-ovh">
													<div className="tns-inner" id="tns4-iw">
														<div className="tabs-slider-tns-carousel-horizontal" data-tabs-slider-wrapper id="tns4">
															<div className="tabs-slider-tns-slide-active" id="tns4-item0">
																<div className="tabs-slider-tab-title-active" data-tab-item data-id="tab-Nya2_c">
																	Всё для сада
																</div>
															</div>
															<div className="tabs-slider-tns-slide-active" id="tns4-item1">
																<div className="tabs-slider-tab-title" data-tab-item data-id="tab-NezAkb">
																	Готовимся к лету
																</div>
															</div>
															<div className="tabs-slider-tns-slide-active" id="tns4-item2">
																<div className="tabs-slider-tab-title" data-tab-item data-id="tab-ru6Ht0">
																	Отдых на природе
																</div>
															</div>
															<div className="tabs-slider-tns-slide-active" id="tns4-item3">
																<div className="tabs-slider-tab-title" data-tab-item data-id="tab-iSo4q9">
																	Освещение для дома
																</div>
															</div>
															<div className="tabs-slider-tns-slide-active" id="tns4-item4">
																<div className="tabs-slider-tab-title" data-tab-item data-id="tab-z91oB">
																	Для ремонта
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="homepage-top-grid-stories-mobile">
							<span id="as-rXypvg" className="homepage-stories"></span>
						</div>
						<div className="homepage-top-grid-auth-left">
							<div className="homepage-auth-homepage-auth-profile">
								<div className="homepage-auth-title">Привет!</div>
								<div className="homepage-auth-description">
									Получай бонусы и спецпредложения,
									<br/>
									сохраняй и отслеживай заказы
								</div>
								<div className="homepage-auth-links">
									<a className="homepage-auth-link-log"
									   href="/#"
									   data-role="homepage-auth-login-button"
									   data-redirect="https://profile.dns-shop.ru"
									   rel="nofollow noopener">
										Перейти в профиль
									</a>
									<a className="homepage-auth-link-sign"
									   href="/#"
									   data-role="homepage-auth-login-button"
									   data-redirect="/profile/order/"
									   rel="nofollow noopener">
										Мои заказы
									</a>
								</div>
							</div>
						</div>
						<div className="homepage-top-grid-auth-right">
							<div className="homepage-auth-homepage-auth-assembly">
								<div className="homepage-auth-title">Собери свой ПК</div>
								<div className="homepage-auth-description">
									Простой инструмент без проблем
									<br/>
									с совместимостью
								</div>
								<div className="homepage-auth-links">
									<a className="homepage-auth-link-rsu"
									   href="/configurator/"
									   rel="nofollow noopener">
										Собрать ПК
									</a>
									<a className="homepage-auth-link-rsu-catalog"
									   href="/custompc/user-pc/"
									   rel="nofollow noopener">
										Сборки пользователей
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="homepage-top-grid-banner">
					<div className="homepage-brands">
						<div className="tns-outer" id="tns1-ow">
							<div className="tns-controls" aria-label="Carousel Navigation" tabIndex="0">
								<button type="button" data-controls="prev" tabIndex="-1" aria-controls="tns2" disabled>
									<div className="icon-arrow-left">
										<i></i>
									</div>
								</button>
								<button type="button" data-controls="next" tabIndex="-1" aria-controls="tns2">
									<div className="icon-arrow-right">
										<i></i>
									</div>
								</button>
							</div>
							<div className="tns-liveregion-hidden" aria-live="polite" aria-atomic="true">
								slide
								<span className="current">1 to 10</span>
								of 54
							</div>
							<div id="tns1-mw" className="tns-ovh">
								<div className="tns-inner" id="tns1-iw">
									<div className="homepage-brands-slider-horizontal" data-role="brands-slider" id="tns1">
										<div className="homepage-brands-tns-slide-active" id="tns1-item0">
											<div className="homepage-brands-item-content-wrapper">
												<a href="/brand/dexp/" className="homepage-brands-item-content">
													<img src="/icons/brands/dexp.png" className="tns-complete-loading" data-was-processed="true" alt="description"/>
												</a>
											</div>
										</div>
										<div className="homepage-brands-tns-slide-active" id="tns1-item1">
											<div className="homepage-brands-item-content-wrapper">
												<a href="/brand/samsung/" className="homepage-brands-item-content">
													<img src="/icons/brands/samsung.png" className="tns-complete-loading" data-was-processed="true" alt="description"/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
