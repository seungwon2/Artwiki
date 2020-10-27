/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";

export default function EditArt({ image }) {
	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});

	const onChange = (annotation) => {
		setAnnotation(annotation);
	};

	const onSubmit = (annotation) => {
		const { geometry, data } = annotation;
		setAnnotation({});
		setAnnotations([...annotations, { geometry, data }]);
		console.log(annotations);
	};

	return (
		<>
			<Annotation
				src='/starrynight.jpeg'
				alt='Two pebbles anthropomorphized holding hands'
				annotations={annotations}
				type={RectangleSelector.TYPE}
				value={annotation}
				onChange={onChange}
				onSubmit={onSubmit}
			/>
		</>
	);
}
const Wrapper = styled.div`
	width: 100%;
	background-color: black;
`;
