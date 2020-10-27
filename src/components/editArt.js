/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import Comment from "./comment";

export default function EditArt({ image }) {
	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});
	const [activeAnnotations, setActiveAnnotations] = useState([]);

	const onChange = (annotation) => {
		setAnnotation(annotation);
	};

	const onSubmit = (annotation) => {
		const { geometry, data } = annotation;
		setAnnotation({});
		setAnnotations([
			...annotations,
			{ geometry, data: { ...data, id: Math.random() } },
		]);
		console.log(annotations);
	};

	const onMouseOver = (id) => (e) => {
		setActiveAnnotations([...activeAnnotations, id]);
	};

	const onMouseOut = (id) => (e) => {
		const index = activeAnnotations.indexOf(id);
		setActiveAnnotations([
			...activeAnnotations.slice(0, index),
			...activeAnnotations.slice(index + 1),
		]);
		console.log(activeAnnotations);
	};

	const activeAnnotationComparator = (a, b) => {
		return a.data.id === b;
	};
	const onClick = (id) => {
		const newAnnotations = [...annotations];
		console.log("before: " + annotations);
		setAnnotations(
			newAnnotations.filter((annotation) => annotation.data.id !== id)
		);
		console.log("after: " + annotations);
	};
	return (
		<Wrapper>
			<Annotation
				src='/starrynight.jpeg'
				alt='Two pebbles anthropomorphized holding hands'
				annotations={annotations}
				type={RectangleSelector.TYPE}
				value={annotation}
				onChange={onChange}
				onSubmit={onSubmit}
				activeAnnotationComparator={activeAnnotationComparator}
				activeAnnotations={activeAnnotations}
			/>
			<Label>Annotation List</Label>
			<Comments>
				{annotations.map((annotation) => (
					<Comment
						onMouseOver={onMouseOver(annotation.data.id)}
						onMouseOut={onMouseOut(annotation.data.id)}
						key={annotation.data.id}
						data={annotation.data.text}
						annotations={annotations}
						id={annotation.data.id}
						onClick={onClick}
					/>
				))}
			</Comments>
		</Wrapper>
	);
}
const Comments = styled.div`
	width: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 80%;
	margin: 5rem auto;
`;
const Label = styled.label`
	width: 100%;
	margin: 0.5rem auto;
	text-align: center;
	font-size: 1.2rem;
`;
