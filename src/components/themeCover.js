/** @format */

import React from "react";
import styled from "styled-components";

export default function ThemeCover({ link, image, theme }) {
	return (
		<Wrapper>
			<Theme href={link}>
				<Profile src={image} />
				<ArtTitle>{theme}</ArtTitle>
			</Theme>
		</Wrapper>
	);
}

const Wrapper = styled.div``;

const Profile = styled.img`
	width: 15rem;
	opacity: 1;
	display: block;
	height: auto;
	transition: 0.5s ease;
	backface-visibility: hidden;
	&:hover {
		opacity: 0.3;
	}
	border-radius: 2rem;
`;
const Theme = styled.a`
	display: flex;
	flex-direction: column;
`;
const ArtTitle = styled.label`
	color: black;
	font-size: 1.1rem;
	text-align: center;
`;
