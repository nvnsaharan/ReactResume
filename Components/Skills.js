import React from "react";
import styled from "styled-components";

function Skills(props) {
	const HeadStart = styled.span`
		color: ${props.props.headColor};
		font-size: xx-large;
		margin-left: 10px;
	`;
	const HeadImp = styled.span`
		color: ${props.props.headColor};
		font-style: bold;
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
				<HeadStart>T</HeadStart>
				ECHNICAL SKILLS
			</h3>
			<ul>
				<li>
					<h3>Languages :</h3>
				</li>
				<ul>
					<HeadImp>Python</HeadImp>, C++, Javascript
				</ul>
				<li>
					<h3>Web development :</h3>
				</li>
				<ul>
					HTML, CSS, <HeadImp>React.js</HeadImp>, Redux
				</ul>
				<li>
					<h3>Software/Skills :</h3>
				</li>
				<ul>
					Data structures and algorithms, Autodesk Inventor, Adobe
					Photoshop, Adobe illustrator, VS Code, Linux, Firebase,
					AnyLogic
				</ul>
				<li>
					<h3>Relevant Courses :</h3>
				</li>
				<ul>
					Intro. To Computer Science, Intro. To Electrical Engg.,
					Calculus, Electromagnetic Waves&qua.mec., Engg.
					Visualization & Comm., Product Realization By Manf., Linear
					Algebra & Dife. Equa., Intr.to Material Sc. & Engg., Mass &
					Energy Balances In Bio., Transport Phenomena, Diferential
					Equations, Social And Political Philosoph, Financial
					Accounting & Compliance For Startups, Numerical Methods&
					Computation, Introduction To Psychology, Design Of Machines,
					Entrepreneurial Design Thinking
				</ul>
			</ul>
		</InternalMain>
	);
}

export default Skills;
