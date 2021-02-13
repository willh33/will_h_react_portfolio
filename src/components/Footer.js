import React from 'react';

const Footer = () => 
	<footer className="text-center">
		<div className="d-flex justify-content-center w-100">
			<a className="https://github.com/willh33">Github Profile</a>
			<a className="ml-3" href="https://www.linkedin.com/in/will-harrison-4484a147/">LinkedIn Profile</a>
			<a className="ml-3" href="./Assets/resume.pdf">My Resume</a>
		</div>
		<p className="mx-auto text-muted" style={ {width: '300px'} }>&#169;Copyright 2021 William Harrison</p>
	</footer>

export default Footer;