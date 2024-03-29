/** @format */

import React from "react";
import styled from "styled-components";
import NavBar from "../../../src/components/navBar";
import ImageDetail from "../../../src/components/imageDetail";
import EditImageInfo from "../../../src/components/editImageInfo";

export default function AddInfo() {
	return (
		<Wrapper>
			<NavBar />
			<ImageDetail />
			<EditImageInfo />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
