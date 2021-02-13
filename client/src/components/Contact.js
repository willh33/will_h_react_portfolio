import React from 'react';

function Contact (props) {
	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title text-info">Contact</h3>
				<form>
					<div className="form-group">
						<label for="nameInpu">Name</label>
						<input type="text" className="form-control" id="nameInpu" placeholder="Email" />
					</div>
					<div className="form-group">
						<label for="emailInput">Email</label>
						<input type="email" className="form-control" id="emailInput" placeholder="Email" />
					</div>
					<div className="form-group">
						<label for="messageInput">Message</label>
						<textarea className="form-control" id="messageInput" rows="3" placeholder="Message"></textarea>
					</div>

					<button type="button" className="btn btn-info btn-lg">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Contact;