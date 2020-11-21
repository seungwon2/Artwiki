/** @format */

import React from "react";
import styled from "styled-components";

export default function ThemeCover({ link, image, theme, info }) {
	return (
		<Wrapper>
			<Theme href={link}>
				<Overlay>
					<Image src={image} />
				</Overlay>
				<Text>
					<ArtTitle>{theme}</ArtTitle>
					<Desc>{info}</Desc>
					<Button>자세히 보기</Button>
				</Text>
			</Theme>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 1rem;
`;

const Image = styled.img`
	width: 17rem;
	display: block;
	height: 28rem;
	object-fit: cover;
	border-radius: 8px;
	transition: transform 0.5s ease;
	&:hover {
		transform: scale(1.5);
	}
`;
const Theme = styled.a`
	display: flex;
	flex-direction: column;
	position: relative;
	text-align: center;
	overflow: hidden;
`;
const ArtTitle = styled.label`
	font-size: 1.5rem;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
`;
const Overlay = styled.div`
	overflow: hidden;
	background: black;
	color: black;
	background-color: black;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
`;
const Text = styled.div`
	color: white;
	text-align: center;
	margin-top: 1rem;
`;
const Desc = styled.label`
	font-size: 1.1rem;
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
`;
const Button = styled.div`
	font-size: 1.1rem;
	position: absolute;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	border: solid 2px;
	border-radius: 3%;
	padding: 3px 8px;
`;
