import React from 'react';

function Portfolio(props) {
	return (
		<div classNameName="card">
				<div className="row">
					<div className="card-body">
						<h1 className="card-title text-info border-bottom">Portfolio</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="text-info">Project 1: Muzylitics</h4>
						<img src="./Assets/Images/muzylitics-img.png" className="project-img portfolio-img" alt="..." />
						<div className="pb-3">
							<a href="https://github.com/timholzer/MUZYLITICS" className="project-img portfolio-img">Github Repo</a>
							<a href="https://timholzer.github.io/MUZYLITICS/" className="project-img portfolio-img">Github Pages</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="text-info">Weather Dashboard</h4>
						<img src="./Assets/Images/weather-dashboard.png" className="project-img portfolio-img" alt="..." />
						<div className="pb-3">
							<a href="https://github.com/willh33/will_h_homework_6" className="project-img portfolio-img">Github Repo</a>
							<a href="https://willh33.github.io/will_h_homework_6/" className="project-img portfolio-img">Github Pages</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="text-info">Project 2: Reserve a Room</h4>
						<img src="./Assets/Images/reserve-a-room.png" id="reserve-a-room-img" className="project-img portfolio-img" alt="..." />
						<div className="pb-3">
							<a href="https://github.com/HeavensRegent/reserve-a-room" className="project-img portfolio-img">Github Repo</a>
							<a href="https://reserve-a-room.herokuapp.com/" className="project-img portfolio-img">Deployed Application</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="text-info">Employee Directory</h4>
						<img src="./Assets/Images/employee-directory.png" id="reserve-a-room-img" className="project-img portfolio-img" alt="..." />
						<div className="pb-3">
							<a href="https://github.com/willh33/employee_directory_will_h" className="project-img portfolio-img">Github Repo</a>
							<a href="https://willh33.github.io/employee_directory_will_h/" className="project-img portfolio-img">Deployed Application</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="text-info">Budget Tracker</h4>
						<img src="./Assets/Images/budget-tracker.png" id="budget-tracker-img" className="project-img portfolio-img" alt="..." />
						<div className="pb-3">
							<a href="https://github.com/willh33/will_h_budget_tracker" className="project-img portfolio-img">Github Repo</a>
							<a href="https://budget-tracker-wh.herokuapp.com/" className="project-img portfolio-img">Deployed Application</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
							<img src="./Assets/Images/grand-america.jpg" className="portfolio-img" alt="..."/>
					</div>
					<div className="col-lg-6">
							<img src="./Assets/Images/emilia-piano.jpg" className="portfolio-img" alt="..."/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
							<img src="./Assets/Images/dbs.jpg" className="portfolio-img" alt="..."/>
					</div>
				</div>
			</div>
	)
}

export default Portfolio;