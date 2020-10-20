/** @format */

import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "antd";
export default function ImageDetail({ image }) {
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
				<Image src={image} width='100%' onClick={handleZoom} />
			</ImageArea>
			<ButtonArea>
				<a href='/edit'>
					<Button onClick={handleEdit}>편집</Button>
				</a>
				<Button onClick={handleZoom}>확대</Button>
			</ButtonArea>
			<Modal
				title='작품 확대 보기'
				centered
				visible={visible}
				onOk={() => setVisible(false)}
				onCancel={() => setVisible(false)}
				width={"100%"}>
				<Image src={image} width='100%' />
			</Modal>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5rem 10rem;
`;
const Image = styled.img`
	height: auto;
`;
const Button = styled.button`
	color: black !important;
	text-transform: uppercase;
	background: #ffffff;
	padding: 20px;
	border: 1px solid black !important;
	border-radius: 50%;
	display: inline-block;
	transition: all 0.3s ease 0s;
	&:hover {
		color: #ffffff !important;
		background: #3483eb;
		border-color: #3483eb !important;
		transition: all 0.4s ease 0s;
	}
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
