/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArtWork from "./artwork.js";
import axios from "axios";

export default function AllView() {
	const [ArtWorks, setArtWorks] = useState([]);
	useEffect(() => {
		console.log("dd");
		axios
			.get(
				"http://ec2-15-164-224-168.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/"
			)
			.then(({ data }) => {
				console.log(data.annotations);
				setArtWorks(data);
			})
			.catch(function (error) {
				console.log(error.config);
			});
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
