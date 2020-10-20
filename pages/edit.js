/** @format */

import React from "react";
import styled from "styled-components";
import EditArt from "../src/components/editArt";

export default function Edit() {
	return (
		<Wrapper>
			<EditArt image='/starrynight.jpeg' />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	margin: 10rem;
`;
