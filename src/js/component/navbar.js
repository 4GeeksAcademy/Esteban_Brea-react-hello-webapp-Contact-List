import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-warning bg-opacity-50 mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-3"><FontAwesomeIcon icon={faHouse} /></span>
			</Link>
			<div className="ml-auto me-3">
				<Link to="/demo">
					<button className="btn btn-secondary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
