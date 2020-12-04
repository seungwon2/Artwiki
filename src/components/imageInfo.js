/** @format */

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
	SwapLeftOutlined,
	SwapRightOutlined,
	TagsFilled,
	EditFilled,
} from "@ant-design/icons";

export default function ImageInfo({
	id,
	title,
	artist,
	date,
	medium,
	location,
	style,
	dimensions,
	desc,
}) {
	const router = useRouter();
	return (
		<Wrapper>
			<TitleArea>
				<Title>{title}</Title>
				<SubTitle>
					{artist}&nbsp;{date}
				</SubTitle>
			</TitleArea>
			<ButtonArea>
				<LongButton
					onClick={() => {
						router.push({ pathname: "/detail/[id]/edit", query: { id: id } });
					}}>
					<EditFilled style={{ fontSize: 20 + "px" }} />
					<ButtonText>라벨 등록 하기</ButtonText>
				</LongButton>

				<LongButton
					onClick={() => {
						router.push({
							pathname: "/detail/[id]/label",
							query: { id: id },
						});
					}}>
					<TagsFilled style={{ fontSize: 20 + "px" }} />
					<ButtonText>라벨과 함께 보기</ButtonText>
				</LongButton>
			</ButtonArea>
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
			<Row>
				{/* <Link href='/detail/[id]' as={`/detail/${id - 1}`}>
					<Button href='/detail'>
						<SwapLeftOutlined style={{ fontSize: 2 + "rem", color: "black" }} />
						<Text>이전 작품으로</Text>
					</Button>
				</Link>
				<Link href='/detail/[id]' as={`/detail/${id + 1}`}>
					<Button href='/detail'>
						<Text>다음 작품으로</Text>
						<SwapRightOutlined
							style={{ fontSize: 2 + "rem", color: "black" }}
						/>
					</Button>
				</Link> */}
			</Row>
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
	padding-top: 1.5rem;
	border-top: 1px solid grey;
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
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;
`;
const Text = styled.label`
	border: none;
	background: none;
	font-size: 1.1rem;
	margin-bottom: 0;
	color: black;
`;
const Button = styled.a`
	display: flex;
	align-items: center;
`;
const ButtonArea = styled.div`
	margin: 24px 0;
`;
const LongButton = styled.button`
	justify-content: space-around;
	border: 1px solid #dadce0;
	width: 12rem;
	height: content-fit;
	padding: 0.3rem 0;
	background-color: white;
	border-radius: 18px;
	margin-right: 1rem;
	&:hover {
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
	}
`;
const ButtonText = styled.label`
	margin-left: 1.5rem;
	margin-bottom: 0;
`;
