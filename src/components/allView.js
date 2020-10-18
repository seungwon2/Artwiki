/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import ArtWork from "./artwork";

export default function AllView() {
	// const [Data, setData] = useState([]);
	// axios
	// 	.get(
	// 		"https://www.doodlehj.com/api/produce/" +
	// 			`?order=${form.order}&o_phone_num=${form.o_phone_num}`,
	// 		form
	// 	)
	// 	.then(({ data }) => {
	// 		if (!data[0]) {
	// 		} else {
	// 			setData(data);
	// 		}
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	const ArtWorks = [
		{
			id: 1,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 2,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 3,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 4,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 5,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 6,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 7,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 8,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
		{
			id: 9,
			image: "/starrynight.jpeg",
			title: "별이 빛나는 밤",
			artist: "빈센트 반 고흐",
			desc:
				"《별이 빛나는 밤》은 네덜란드의 화가 빈센트 반 고흐의 가장 널리 알려진 작품이다. 정신병을 앓고 있을 당시의 고흐가 그린 작품이다. 1889년 상 레미의 정신병원에서 나와 기억으로 그린 그림이지만, 당시 고흐는 정신장애로 인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.",
		},
	];
	// setData(ArtWorks);
	return (
		<Wrapper>
			<Title>작품 전체보기</Title>
			<Artworks>
				{ArtWorks.map((artwork) => (
					<ArtWork
						key={artwork.id}
						image={artwork.image}
						title={artwork.title}
						artist={artwork.artist}
						desc={artwork.desc}
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
`;
const Artworks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
