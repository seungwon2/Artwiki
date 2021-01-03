/** @format */

import React from "react";
import styled from "styled-components";

import { Button } from "antd";
export default function Comment({
	data,
	onMouseOver,
	onMouseOut,
	key,
	onClick,
}) {
	return (
		<>
			{data.data.comments.map((comment) => (
				<Wrapper
					onMouseOver={() => onMouseOver(data.data.id)}
					onMouseOut={() => onMouseOut(data.data.id)}
					key={key}>
					<Label>{comment.text}</Label>
					<Button onClick={() => onClick(comment.id, data.data.id)}>
						delete
					</Button>
				</Wrapper>
			))}
		</>
	);
}
const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin: 0.3rem auto;
	justify-content: space-between;
	&: hover {
		color: grey;
	}
	padding: 0 auto;
`;
const Label = styled.label``;
