/** @format */

import React from "react";
import styled from "styled-components";

export default function Rules() {
	return (
		<Wrapper>
			<Title>라벨링 의도</Title>
			<Contents>
				<Content>1. 그림 내부에 설명을 적기 원하는 사물을 찾는다.</Content>
			</Contents>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5rem 10rem;
`;
const Title = styled.p``;
const Contents = styled.div``;
const Content = styled.p``;
