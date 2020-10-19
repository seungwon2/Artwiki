/** @format */

import React from "react";
import styled from "styled-components";

export default function Banner({ image, title, desc }) {
	return (
		<Wrapper>
			<Background src={image} />
			<Text>
				<Title>{title}</Title>
				<Desc>{desc}</Desc>
			</Text>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	margin: 2.5rem 0rem;
	background: rgba(0, 0, 0, 0.05);
	text-align: center;
`;
const Background = styled.img`
	height: 28rem;
	max-width: 100%;
`;
const Title = styled.p`
	color: white;
	font-size: 2rem;
`;
const Desc = styled.p`
	color: white;
	font-size: 1rem;
`;
const Text = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
