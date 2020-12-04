/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArtWork from "./artwork.js";
import axios from "axios";

export default function AllView() {
	// const [ArtWorks, setArtWorks] = useState([]);
	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/"
	// 		)
	// 		.then(({ data }) => {
	// 			console.log(data.annotations);
	// 			setArtWorks(data.annotations);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.config);
	// 		});
	// }, []);
	const ArtWorks = [
		{
			id: 1,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 2,
			image: "/1.jpg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 3,
			image: "/2.jpg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 4,
			image: "/3.jpg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 5,
			image: "/4.jpg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 6,
			image: "/5.jpg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			shortdesc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
	];

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
