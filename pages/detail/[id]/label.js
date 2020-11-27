/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import axios from "axios";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import NavBar from "../../../src/components/navBar";

export default function Label() {
	const [annotations, setAnnotations] = useState([]);

	useEffect(() => {
		axios
			.get(
				"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/"
			)
			.then(({ data }) => {
				console.log(data.annotations);
				setAnnotations(data.annotations);
			})
			.catch(function (error) {
				console.log(error.config);
			});
	}, []);
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

	const activeAnnotationComparator = (a, b) => {
		return a.data.id === b;
	};

	return (
		<Wrapper>
			<NavBar />
			<ImageArea>
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
			</ImageArea>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const ImageArea = styled.div`
	margin: 10rem 20rem;
`;
