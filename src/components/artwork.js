/** @format */

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { Card } from "antd";

export default function ArtWork({ image, title, artist, shortdesc, id }) {
	const router = useRouter();
	return (
		<Wrapper
			onClick={() => {
				router.push({ pathname: "/detail/[id]", query: { id: id } });
			}}>
			<Card hoverable style={{ width: 300 }} cover={<img src={image} />}>
				<Title>{title}</Title>
				<Artist>{artist}</Artist>
				<Desc>{shortdesc}</Desc>
			</Card>
		</Wrapper>
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
