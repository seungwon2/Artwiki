/** @format */

import React from "react";
import styled from "styled-components";

import { BankFilled } from "@ant-design/icons";
export default function NavBar() {
	return (
		<Wrapper>
			<Title href='/'>
				<Icon>
					<BankFilled />
				</Icon>
				&nbsp;artwiki
			</Title>
			<Menu>
				<Home href='/'>홈</Home>
				<ArtWorks href='/artworks'>작품 전체보기</ArtWorks>
			</Menu>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 1.5rem;
	align-items: center;
	box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.11);
`;
const Title = styled.a`
	color: black;
	padding-left: 2rem;
	font-size: 1.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const ArtWorks = styled.a`
	color: black;
	padding-right: 2rem;
`;
const Home = styled.a`
	color: black;
	padding-right: 3rem;
`;
const Menu = styled.div``;
const Icon = styled.div`
	width: fit-content;
	margin-bottom: 0.5rem;
`;
