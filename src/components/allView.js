/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArtWork from "./artwork.js";
import axios from "axios";

export default function AllView() {
	const [ArtWorks, setArtWorks] = useState([]);
	useEffect(() => {
		axios
			.get("https://www.artwiki-sh.com/api/artwork/")
			.then(({ data }) => {
				setArtWorks(data);
			})
			.catch(function (error) {});
	}, []);

	return (
		<Wrapper>
			<Title>작품 전체보기</Title>
			<Artworks>
				{ArtWorks.map((artwork) => (
					<ArtWork
						key={artwork.id}
						id={artwork.id}
						image={artwork.image}
						title={artwork.title}
						artist={artwork.artist}
						shortdesc={artwork.short_desc}
					/>
				))}
			</Artworks>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem 10rem;
`;
const Title = styled.p`
	font-size: 1.5rem;
	margin-bottom: 0;
`;
const Artworks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
