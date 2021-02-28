import React from "react";
import styled from "styled-components";

function Experience(props) {
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
			color: gray;
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
				<HeadStart> E</HeadStart>
				XPERIENCE
			</h3>
			<ul>
				<li>
					<h3>Front End Intern, TimeWillTalk</h3>
				</li>
				<h4>React.js | AWS | Antd | UI</h4>
				<ul>
					<li>
						Develop a high-performance web application using
						ReactJS, Redux, React-Router, and Antd components
					</li>
					<li>
						Built custom components for UX-Library consisting of
						Modal, Dropdown, Carousel, Button, Checkbox, Inputs,
						Icons
					</li>
					<li>
						Ensure mobile compatibility/responsiveness of full
						website on all platforms and browsers
					</li>
					<li>
						Design and apply styling and layout changes to the
						existing application
					</li>
				</ul>
			</ul>
		</InternalMain>
	);
}

export default Experience;
