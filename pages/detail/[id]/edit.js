/** @format */

import React from "react";
import styled from "styled-components";
import NavBar from "../../../src/components/navBar";
import EditArt from "../../../src/components/editArt";

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
