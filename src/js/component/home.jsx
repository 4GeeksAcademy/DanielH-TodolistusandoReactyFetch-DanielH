import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { EjemploApis } from "/workspaces/DanielH-TodolistusandoReactyFetch-DanielH/src/js/component/EjemploApis.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<EjemploApis/>
		</div>
	);
};

export default Home;
