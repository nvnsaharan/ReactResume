import React from "react";
import styled from "styled-components";

function Projects(props) {
	const HeadStart = styled.span`
		color: ${props.props.headColor};
		font-size: xx-large;
		margin-left: 10px;
	`;
	const InternalMain = styled.div`
		display: inline;
		height: 100%;
		width: 100%;
		position: relative;

		> ul > li > h4,
		> ul > h4 {
			margin: 0;
			display: inline;
		}
		> ul > li > h3 {
			margin: 0;
			padding-right: 100px;
			padding-bottom: 3px;
			width: 200px;
			display: inline;
		}
		> ul > li > a {
			color: ${props.props.linkColor};
			text-decoration: none;
			position: absolute;
			left: 250px;
			width: 100px;
		}
		> h3 {
			margin: 0px;
		}
	`;

	return (
		<InternalMain>
			<h3>
				<HeadStart>P</HeadStart>
				ROJECTS
			</h3>
			<ul>
				<li>
					<h3>My Covid-19 Tracker</h3>
					<a href="https://mycovid-tracker.web.app/">(live demo)</a>
				</li>
				<h4>
					React.js | Firebase | Material UI | Leaflet | Chartjs |
					disease.sh
				</h4>
				<ul>
					<li>Covid-19 tracker using React.js and disease.sh API</li>
					<li>
						Used react-leaflet for a map to showcases with circles
						and material-UI for good design
					</li>
					<li>
						Used react-chartjs for line chart to show growth of
						total corona cases, recovered patients, and deaths
					</li>
				</ul>
			</ul>
			<ul>
				<li>
					<h3>Facebook clone</h3>
					<a href="https://myfacebclone.web.app/">(live demo)</a>
				</li>
				<h4>React.js | Firebase | Material UI</h4>
				<ul>
					<li>A facebook clone using Reactjs and Material-ui</li>
				</ul>
			</ul>
			<ul>
				<li>
					<h3>Scientific calculator</h3>
				</li>
				<h4>Python | Tkinter | GUI</h4>
				<ul>
					<li>
						A working GUI app using Python and Tkinter with All
						scientific calculator features and Learn to manage
						graphics
					</li>
				</ul>
			</ul>
			<ul>
				<li>
					<h3>My Chat app</h3>
					<a href="https://nvnmsg.web.app/">(live demo)</a>
				</li>

				<h4>React.js | Firebase | Material UI</h4>
				<ul>
					<li>
						A chat app inspired by WhatsApp, which allows users to
						chat in real-time in channel
					</li>
					<li>Used firebase for Google authentication and backend</li>
				</ul>
			</ul>
			<ul>
				<li>
					<h3>Chess (in progress)</h3>
				</li>
				<h4>Python | Pygame</h4>
				<ul>
					<li>
						A chess game in python using pygame for single and
						multiplayer
					</li>
				</ul>
			</ul>
		</InternalMain>
	);
}

export default Projects;
