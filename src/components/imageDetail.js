/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Modal, Image } from "antd";
export default function ImageDetail({ image, id }) {
	const [visible, setVisible] = useState(false);

	const handleEdit = () => {
		console.log("edit");
	};
	const handleZoom = () => {
		setVisible(true);
		console.log("zoom");
	};

	return (
		<Wrapper>
			<ImageArea>
				<Image src={image} width='100%' />
			</ImageArea>
			<ButtonArea>
				<Link href='/detail/[id]/edit' as={`/detail/${id}/edit`}>
					<Button onClick={handleEdit}>편집</Button>
				</Link>
			</ButtonArea>
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
	color: #fff;
	text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
	line-height: 1.5715;
	position: relative;
	display: inline-block;
	font-weight: 400;
	white-space: nowrap;
	text-align: center;
	-webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
	cursor: pointer;
	-webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	-ms-touch-action: manipulation;
	touch-action: manipulation;
	height: fit-content;
	padding: 15px 15px;
	font-size: 14px;
	border-radius: 50%;
	color: rgba(0, 0, 0, 0.85);
	background: #fff;
	border: 1px solid #d9d9d9;
	&: hover {
		color: #fff;
		background: #1890ff;
		border-color: #1890ff;
	}
`;
