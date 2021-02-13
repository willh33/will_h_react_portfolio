import React, {useState, useContext} from 'react';

function Header( {activePage, updateActive, ...props} ) {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<h3 className="navbar-brand text-light bg-info">Will Harrison</h3>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
					<li className={`nav-item ${activePage === 'contact' ? '' : ''}`}>
						<a className="nav-link" href="/contact" onClick={e => updateActive('contact')}>Contact</a>
					</li>
					<li className={`nav-item ${activePage === 'portfolio' ? '' : ''}`}>
						<a className="nav-link" href="/portfolio" onClick={e => updateActive('portfolio')}>Portfolio</a>
					</li>
					<li className={`nav-item ${activePage === 'about' ? '' : ''}`}>
						<a className="nav-link" href="/" onClick={e => updateActive('about')}>About <span className="sr-only">(current)</span></a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;