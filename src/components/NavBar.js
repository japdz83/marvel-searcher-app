import React, { useState } from "react";
// import { Link } from "react-router-dom";
import LogoMarvel from "../img/Marvel_logo_red-web.jpg";
import Search from "./Search";



export const Navbar = () => {

	const [query, setQuery] = useState('')

	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top w-100 shadow-sm">
			<div className="d-flex aling-vertical">
				<span className="navbar-brand mb-0 h1">
					<img src={LogoMarvel} alt="Logo Marvel" />
				</span>
				<Search search={(q) => setQuery(q)} />
			</div>
			
			<div className="ml-auto">
				
					<span className=""> <i className="far fa-star"></i></span>
				
			</div>
		</nav>
	);
};