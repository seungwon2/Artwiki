/** @format */

import React from "react";
import styled from "styled-components";

export default function ThemeView() {
	return (
		<Wrapper>
			<Title>테마별 작품 보기</Title>
			<Theme href='/artworks/vangogh'>
				<Profile src='/gogh.png' />
				<ArtTitle>빈센트 반 고흐</ArtTitle>
			</Theme>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem 10rem 10rem 10rem;
`;
const Title = styled.p`
	font-size: 1.5rem;
`;
const Profile = styled.img`
	width: 300px;
	opacity: 1;
	display: block;
	height: auto;
	transition: 0.5s ease;
	backface-visibility: hidden;
	&:hover {
		opacity: 0.3;
	}
`;
const Theme = styled.a`
	display: flex;
	flex-direction: column;
`;
const ArtTitle = styled.label`
	color: black;
`;
