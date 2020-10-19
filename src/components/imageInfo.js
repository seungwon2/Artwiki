/** @format */

import React from "react";
import styled from "styled-components";

export default function ImageInfo({
	title,
	artist,
	date,
	medium,
	location,
	style,
	dimensions,
	desc,
}) {
	return (
		<Wrapper>
			<TitleArea>
				<Title>{title}</Title>
				<SubTitle>
					{artist}&nbsp;{date}
				</SubTitle>
			</TitleArea>
			<DescArea>
				<Desc>{desc}</Desc>
				<BasicInfo>
					제목: {title}
					<br />
					작가: {artist}
					<br />
					제작 연도: {date}
					<br />
					재료: {medium}
					<br />
					소장처: {location}
					<br />
					화파: {style}
					<br />
					작품 크기: {dimensions}
				</BasicInfo>
			</DescArea>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0rem 10rem 5rem 10rem;
`;
const TitleArea = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;
const Title = styled.p`
	font-size: 1.5rem;
	margin-bottom: 0;
`;
const SubTitle = styled.div`
	color: lightgrey;
	font-size: 1.1rem;
`;

const DescArea = styled.div`
	display: flex;
	justify-content: space-between;
`;
const BasicInfo = styled.label`
	flex-basis: 45%;
	line-height: 1.6rem;
`;
const Desc = styled.label`
	flex-basis: 45%;
`;
