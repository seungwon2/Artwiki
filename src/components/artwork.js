/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Card } from "antd";

export default function ArtWork({ image, title, artist, shortdesc, id }) {
	return (
		<Link href='/detail/[id]' as={`/detail/${id}`}>
			<Wrapper>
				<Card hoverable style={{ width: 300 }} cover={<img src={image} />}>
					<Title>{title}</Title>
					<Artist>{artist}</Artist>
					<Desc>{shortdesc}</Desc>
				</Card>
			</Wrapper>
		</Link>
	);
}

const Wrapper = styled.div`
	margin: 2.5rem 0rem;
`;
const Title = styled.label`
	font-size: 1.1rem;
	font-weight: bold;
	margin-bottom: -0.2rem;
`;
const Artist = styled.p``;
const Desc = styled.p``;
