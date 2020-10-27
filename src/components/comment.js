/** @format */

import React from "react";
import styled from "styled-components";

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
			{data}
			<Button onClick={() => onClick(id)}>delete</Button>
		</Wrapper>
	);
}
const Wrapper = styled.div``;
const Button = styled.button``;
