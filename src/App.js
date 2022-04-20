import './App.scss';
import React from "react";
import HeaderTopMenuCommonListLi from "./components/header/li/HeaderTopMenuCommonListLi";
import HeaderTopMenuCommonListLiTest from "./components/header/li-test/HeaderTopMenuCommonListLiTest";

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
							<HeaderTopMenuCommonListLi/>
							<HeaderTopMenuCommonListLiTest name="Еда"/>
							<HeaderTopMenuCommonListLi/>
							<HeaderTopMenuCommonListLi/>
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
