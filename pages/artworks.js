/** @format */

import React from "react";
import styled from "styled-components";

import NavBar from "../src/components/navBar";
import AllView from "../src/components/allView";
import Banner from "../src/components/banner";
export default function ArtWorks() {
	return (
		<Wrapper>
			<NavBar />
			<Banner
				title='작품 전체보기'
				image='/banner.jpg'
				desc='artwiki의 모든 작품을 한눈에 볼 수 있는 공간입니다.'
			/>
			<AllView />
		</Wrapper>
	);
}

const Wrapper = styled.div``;
