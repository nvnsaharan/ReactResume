import React from "react";
import Contact from "./Components/Contact";
import Achievements from "./Components/Achievements";
import Experience from "./Components/Experience";
import ExtraAct from "./Components/ExtraAct";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Academic from "./Components/Academic";
import styled from "styled-components";

function Body(props) {
	const BodyMain = styled.div`
		width: 500px;
		padding: 10px;
		padding-right: 30px;
		margin-bottom: 20px;
		background-color: ${props.backColor};
		box-shadow: 5px 5px 5px black;
		margin: auto;
		overflow-x: hidden;
		overflow-y: hidden;
		color: ${props.txtColor};
		line-height: 10px;
		font-family: "Segoe UI", sans-serif;
		font-size: 8px;
	`;

	return (
		<BodyMain>
			<Contact props={{ ...props }} />
			<Academic props={{ ...props }} />
			<Experience props={{ ...props }} />
			<Projects props={{ ...props }} />
			<Skills props={{ ...props }} />
			<Achievements props={{ ...props }} />
			<ExtraAct props={{ ...props }} />
		</BodyMain>
	);
}

export default Body;
