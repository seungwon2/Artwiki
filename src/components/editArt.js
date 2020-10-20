/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
	ReactPictureAnnotation,
	defaultShapeStyle,
	DefaultInputSection,
} from "react-picture-annotation";

export default function EditArt({ image }) {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const onResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
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
				image='https://source.unsplash.com/random/800x600'
				onSelect={onSelect}
				onChange={onChange}
				width={width}
				height={height}
				annotationStyle={{
					...defaultShapeStyle,
					shapeStrokeStyle: "#2193ff",
					transformerBackground: "black",
				}}
				inputElement={(value, onChange, onDelete) => (
					<DefaultInputSection
						placeholder={"Hello world"}
						{...{ value, onChange, onDelete }}
					/>
				)}
			/>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	background-color: black;
`;
