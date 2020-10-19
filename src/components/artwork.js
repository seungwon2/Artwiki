/** @format */

import React from "react";
import styled from "styled-components";

import { Card } from "antd";

export default function ArtWork({ image, title, artist, desc }) {
	return (
		<Wrapper href='/detail'>
			<Card hoverable style={{ width: 300 }} cover={<img src={image} />}>
				<Title>{title}</Title>
				<Artist>{artist}</Artist>
				<Desc>{desc}</Desc>
			</Card>
		</Wrapper>
	);
}
const Wrapper = styled.a`
	margin: 2.5rem 0rem;
`;
const Title = styled.label`
	font-size: 1.1rem;
	font-weight: bold;
	margin-bottom: -0.2rem;
`;
const Artist = styled.p``;
const Desc = styled.p``;
