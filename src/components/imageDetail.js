/** @format */

import React from "react";
import styled from "styled-components";

import { Image } from "antd";
export default function ImageDetail({ image }) {
	return (
		<Wrapper>
			<ImageArea>
				<Image src={image} width='100%' cursor='hand' />
			</ImageArea>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem 8rem;
`;

const ImageArea = styled.a`
	display: flex;
	flex-direction: center;
	margin: 0rem 15rem 2rem 15rem;
`;
