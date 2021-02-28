import React from "react";
import styled from "styled-components";

function Achievements(props) {
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
				<HeadStart> S</HeadStart>
				CHOLASTIC ACHIEVEMENTS
			</h3>
			<ul>
				<li>
					<h4>Joint Entrance Examination (JEE) Advanced Rank :</h4>
					Secured 2359(OB) (in top 5% students) in JEE Advanced for
					admission to IIT colleges among 1.5 million students
				</li>
				<li>
					<h4>JEE Mains :</h4> Secured AIR 8100 (in top 1% students)
					in JEE Mains for admission to various Engg. collages among
					1.5 million students
				</li>
			</ul>
		</InternalMain>
	);
}

export default Achievements;
