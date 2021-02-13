import React from 'react';

const Project = (props) => 
	<div className="container-fluid float-left border-info">
		<div className="row  mt-5">
            <div className="col-lg-9 col-md-9 mt-3 mb-5">
				{props.children}
			</div>
		</div>
	</div>

export default Project;
