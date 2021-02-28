import React from "react";
import mail from "../Icons/mail.png";
import Github from "../Icons/Github.png";
import LinkedIn from "../Icons/linkedIn.png";
import styled from "styled-components";

function Contact(props) {
	const HeadName = styled.span`
		color: ${props.props.headColor};
		font-size: xx-large;
		margin-bottom: 2px;
	`;
	const InternalContact = styled.div`
		> h2,
		> ul {
			display: flex;
			justify-content: space-evenly;
		}
		> ul > a {
			color: ${props.props.linkColor};
			text-decoration: none;
			margin-right: 20px;
			display: flex;
		}
		> ul > a > img {
			height: 12px;
			width: 12px;
			margin-right: 10px;
			filter: grayscale(100);
		}
	`;

	return (
		<InternalContact>
			<h2>
				<HeadName>NAVEEN SAHARAN</HeadName>
			</h2>
			<ul>
				<a href="mailto:saharan.nvn@gmail.com">
					<img src={mail} alt="E-mail" />
					saharan.nvn@gmail.com
				</a>

				<a href="https://www.linkedin.com/in/naveen-saharan-225168191/">
					<img src={LinkedIn} alt="LinkedIn" />
					Naveen Saharan
				</a>

				<a href="https://github.com/nvnsaharan">
					<img src={Github} alt="Github" /> nvnsaharan
				</a>
			</ul>
		</InternalContact>
	);
}

export default Contact;
