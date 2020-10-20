/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
	ReactPictureAnnotation,
	defaultShapeStyle,
	DefaultInputSection,
} from "react-picture-annotation";

export default function EditArt({ image }) {
	const [pageSize, setPageSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	const onResize = () => {
		setPageSize({ width: window.innerWidth, height: window.innerHeight });
	};

	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const onSelect = (selectedId) => console.log(selectedId);
	const onChange = (data) => console.log(data);

	return (
		<Wrapper>
			<ReactPictureAnnotation
				image={image}
				onSelect={onSelect}
				onChange={onChange}
				width={pageSize.width}
				height={pageSize.height}
			/>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 50%;
`;
