import React from "react";
import styled from "styled-components";

function ExtraAct(props) {
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
		<InternalMain props={{ ...props }}>
			<h3>
				<HeadStart props={{ ...props }}>E</HeadStart>
				XTRA CURRICULAR ACTIVITIES
			</h3>
			<ul>
				<li>
					<h4>Security Executive :</h4>
					Spearheaded a 2 tier team of 15+ volunteers to successfully
					organize Pronites and other events at Rendezvous 2019 over a
					span of 4 days
				</li>
				<li>
					<h4>Executive Formal Events :</h4> Invite Teams from various
					colleges and organize matches at Sportech 2020.
				</li>
				<li>
					<h4>Marketing Team Head, RDV'19 :</h4> Plan campaigns and
					develops communications material to promote products,
					services, and events at other colleges at Rendezvous 2019
				</li>
			</ul>
		</InternalMain>
	);
}

export default ExtraAct;
