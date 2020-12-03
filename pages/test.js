/** @format */

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";

import NavBar from "../src/components/navBar";
import ThreadedContent from "../src/components/threadedContent";
import ThreadedEditor from "../src/components/threadedEditor";

export default function Threaded() {
	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});
	const [activeAnnotations, setActiveAnnotations] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/"
	// 		)
	// 		.then(({ data }) => {
	// 			console.log(data.annotations);
	// 			setAnnotations(data.annotations);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.config);
	// 		});
	// }, []);
	// const handleSubmit = () => {
	// 	axios
	// 		.patch(
	// 			"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/",
	// 			{ annotations }
	// 		)
	// 		.then(console.log(annotation))
	// 		.catch(function (error) {
	// 			console.log(error.config);
	// 		});
	// 	console.log("clicked");
	// };

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

	const renderEditor = (props) => {
		const { geometry } = props.annotation;
		if (!geometry) return null;

		return <ThreadedEditor {...props} />;
	};

	const renderContent = ({ key, annotation }) => {
		return (
			<ThreadedContent
				key={key}
				annotation={annotation}
				annotations={annotations}
				setAnnotations={setAnnotations}
				onFocus={onFocus(key)}
				onBlur={onBlur(key)}
			/>
		);
	};

	const onFocus = (id) => (e) => {
		setActiveAnnotations([...activeAnnotations, id]);
	};

	const onBlur = (id) => (e) => {
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

	return (
		<>
			<NavBar />
			<ArtWorkWrapper>
				<Annotation
					src='/starrynight.jpeg'
					alt='Two pebbles anthropomorphized holding hands'
					activeAnnotationComparator={activeAnnotationComparator}
					activeAnnotations={activeAnnotations}
					annotations={annotations}
					type={RectangleSelector.TYPE}
					value={annotation}
					renderEditor={renderEditor}
					renderContent={renderContent}
					onChange={onChange}
					onSubmit={onSubmit}
				/>
			</ArtWorkWrapper>
		</>
	);
}
const ArtWorkWrapper = styled.div`
	margin: 10rem;
`;
