/** @format */

import React, { useState } from "react";
import styled from "styled-components";

export default function Rules() {
	return (
		<Wrapper>
			<Title>라벨링 규칙</Title>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5rem 10rem;
`;
const Title = styled.p``;
