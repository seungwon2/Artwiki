/** @format */

import React from "react";
import styled from "styled-components";
import ThemeCover from "./themeCover";

export default function ThemeView() {
	const Themes = [
		{
			id: 1,
			image: "/gogh.png",
			link: "/artworks",
			theme: "빈센트 반 고흐",
		},
		{
			id: 2,
			image: "/gogh.png",
			link: "/artworks",
			theme: "빈센트 반 고흐",
		},
		{
			id: 3,
			image: "/gogh.png",
			link: "/artworks",
			theme: "빈센트 반 고흐",
		},
		{
			id: 4,
			image: "/gogh.png",
			link: "/artworks",
			theme: "빈센트 반 고흐",
		},
	];
	return (
		<Wrapper>
			<Title>테마별 작품 보기</Title>
			<Images>
				{Themes.map((artwork) => (
					<ThemeCover
						key={artwork.id}
						link={artwork.link}
						image={artwork.image}
						theme={artwork.theme}
					/>
				))}
			</Images>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem 10rem 5rem 10rem;
`;
const Title = styled.p`
	font-size: 1.5rem;
`;
const Images = styled.div`
	display: flex;
	justify-content: space-between;
`;
