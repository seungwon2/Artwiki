/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Image } from "antd";
export default function ImageDetail({ image, id }) {
	return (
		<Wrapper>
			<ImageArea>
				<Image src={image} width='100%' />
			</ImageArea>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5rem 10rem;
`;

const ButtonArea = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0rem 5rem;
`;
const ImageArea = styled.div`
	display: flex;
	flex-direction: center;
	margin: 0rem 15rem 2rem 15rem;
`;
const Button = styled.button`
	border: 1px solid #dadce0;
	-webkit-border-radius: 18px;
	border-radius: 18px;
	color: #202124;
	-webkit-box-flex: 0;
	box-flex: 0;
	-webkit-flex-grow: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	flex-shrink: 0;
	font-weight: 400;
	height: 36px;
	margin-left: 24px;
	-webkit-transition-duration: 150ms;
	transition-duration: 150ms;
	-webkit-transition-property: transform background-color;
	transition-property: transform background-color;
	-webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	z-index: 2;
	letter-spacing: 0.01785714em;
	font-family: "Google Sans", Roboto, Arial, sans-serif;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.25rem;
	color: #1a73e8;
`;
