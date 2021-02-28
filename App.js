import React, { useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Body from "./Body";
import "./App.css";
import styled from "styled-components";

const SideBar = styled.div`
	width: 100%;
	background-color: #007cc7;
	padding-bottom: 3px;
	position: -webkit-sticky;
	position: sticky;
	top: 0px;
	z-index: 100;
	margin-bottom: 20px;
	.colorPicker {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		> div {
			margin: 10px 0px;
		}
		> div > h3 {
			margin: 0px 10px;
			display: inline;
			color: white;
			font-weight: normal;
		}
	}
`;

function App() {
	const [headColor, setHeadColor] = useState("#ff4500");
	const [backColor, setBackColor] = useState("#ffffff");
	const [txtColor, setTxtColor] = useState("#2f4f4f");
	const [linkColor, setLinkColor] = useState("#808080");
	const [resume, setResume] = useState();

	const exportPDF = () => {
		resume.save();
	};

	return (
		<div className="App">
			<SideBar>
				<div className="colorPicker">
					<div>
						<h3>Header :</h3>
						<input
							type="color"
							value={headColor}
							onChange={(e) => setHeadColor(e.target.value)}
						/>
					</div>
					<div>
						<h3>Background :</h3>
						<input
							type="color"
							value={backColor}
							onChange={(e) => setBackColor(e.target.value)}
						/>
					</div>
					<div>
						<h3>Text :</h3>
						<input
							type="color"
							value={txtColor}
							onChange={(e) => setTxtColor(e.target.value)}
						/>
					</div>
					<div>
						<h3>Links :</h3>
						<input
							type="color"
							value={linkColor}
							onChange={(e) => setLinkColor(e.target.value)}
						/>
					</div>
				</div>
				<div className="downloadBtnDiv">
					<h3>Choose your favourite</h3>
					<button onClick={exportPDF}>download</button>
				</div>
			</SideBar>
			<div>
				<PDFExport
					paperSize={"Letter"}
					fileName="Resume.pdf"
					title=""
					subject=""
					keywords=""
					ref={(r) => setResume(r)}
				>
					<Body
						linkColor={linkColor}
						txtColor={txtColor}
						headColor={headColor}
						backColor={backColor}
					/>
				</PDFExport>
			</div>
		</div>
	);
}

export default App;
