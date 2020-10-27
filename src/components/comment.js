/** @format */

import React from "react";
import styled from "styled-components";

import { Button } from "antd";
export default function Comment({
	data,
	onMouseOver,
	onMouseOut,
	key,
	id,
	annotations,
	setAnnotations,
	onClick,
}) {
	return (
		<Wrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut} key={key}>
			<Label>{data}</Label>
			<Button onClick={() => onClick(id)}>delete</Button>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	width: 50%;
	margin: 0.3rem auto;
	justify-content: space-between;
	&: hover {
		color: grey;
	}
	padding: 0 auto;
`;
const Label = styled.label``;
