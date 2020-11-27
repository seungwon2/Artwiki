/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import ArtWork from "./artwork.js";

export default function AllView() {
	const [Data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/"
			)
			.then(({ data }) => {
				console.log(data.annotations);
				setData(data.annotations);
			})
			.catch(function (error) {
				console.log(error.config);
			});
	}, []);

	return (
		<Wrapper>
			<Title>작품 전체보기</Title>
			<Artworks>
				{Data.map((artwork) => (
					<ArtWork
						key={artwork.id}
						id={artwork.id}
						image={artwork.image}
						title={artwork.title}
						artist={artwork.artist}
						shortdesc={artwork.shortdesc}
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
