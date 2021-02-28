import React from "react";
import styled from "styled-components";

function Academic(props) {
	const InternalAcd = styled.div`
		> ul > h3,
		> ul > h4 {
			margin: 0px;
		}
	`;
	const HeadStart = styled.span`
		color: ${props.props.headColor};
		font-size: xx-large;
		margin-left: 10px;
	`;
	return (
		<InternalAcd>
			<h3>
				<HeadStart>A</HeadStart>
				CADEMIC DETAILS
			</h3>
			<ul>
				<h3>B.Tech in Biochemical Engineering & Biotechnology</h3>
				<h4>Indian Institute of Technology, Delhi</h4>
				2018-2022
			</ul>
		</InternalAcd>
	);
}

export default Academic;
