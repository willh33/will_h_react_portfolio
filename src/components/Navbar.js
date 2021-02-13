import React from 'react';

function Navbar(props) {

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<h3 class="navbar-brand text-light bg-info">Will Harrison</h3>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="/contact">Contact</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/portfolio">Portfolio</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="/index">About <span class="sr-only">(current)</span></a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;