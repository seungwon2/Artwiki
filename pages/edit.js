/** @format */

import React from "react";
import styled from "styled-components";
import EditArt from "../src/components/editArt";
import NavBar from "../src/components/navBar";

export default function Edit() {
	return (
		<Wrapper>
			<NavBar />
			<EditArt />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
