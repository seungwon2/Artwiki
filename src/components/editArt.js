/** @format */

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";
import Scrollbar from "react-scrollbars-custom";

import NavBar from "./navBar";
import ThreadedContent from "./threadedContent";
import ThreadedEditor from "./threadedEditor";
import Comment from "./comment";
import { Button } from "antd";
import { useRouter } from "next/router";

export default function EditArt({ id }) {
	const router = useRouter();
	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});
	const [activeAnnotations, setActiveAnnotations] = useState([]);

	useEffect(() => {
		console.log("id 출력: ", router.query.id);

		// 	axios
		// 		.get(
		// 			`http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/${id}/`
		// 		)
		// 		.then(({ data }) => {
		// 			console.log(data.annotations);
		// 			setAnnotations(data.annotations);
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error.config);
		// 		});
	}, []);
	const handleSubmit = () => {
		// axios
		// 	.patch(
		// 		"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/",
		// 		{ annotations }
		// 	)
		// 	.then(console.log(annotation))
		// 	.catch(function (error) {
		// 		console.log(error.config);
		// 	});
		console.log("clicked");
		console.log(annotations);
	};
	const onClick = (id) => {
		const newAnnotations = [...annotations];
		console.log("before: " + annotations);
		setAnnotations(
			newAnnotations.filter((annotation) => annotation.data.id !== id)
		);
		console.log("after: " + annotations);
	};

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

	return (
		<>
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
			<LabelBox>
				<Label>Annotation List</Label>
				<Scrollbar style={{ height: 800 }}>
					{annotations.map((annotation) => (
						<Comment
							onMouseOver={onMouseOver(annotation.data.comments.id)}
							onMouseOut={onMouseOut(annotation.data.comments.id)}
							key={annotation.data.comments.id}
							data={annotation.data.comments.text}
							id={annotation.data.comments.id}
							onClick={onClick}
						/>
					))}
				</Scrollbar>
				<ButtonArea>
					<Button onClick={handleSubmit}>편집 저장</Button>
					<Blank />
					<Button>편집 완료</Button>
				</ButtonArea>
			</LabelBox>
		</>
	);
}
const ArtWorkWrapper = styled.div`
	margin: 10rem;
`;
const Label = styled.label`
	width: 100%;
	margin: 0.5rem auto;
	text-align: center;
	font-size: 1.2rem;
	margin-bottom: 0.3rem;
`;
const ButtonArea = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0.5rem;
`;
const Blank = styled.div`
	margin: 0 1rem;
`;
const LabelBox = styled.div`
	height: 300px;
	overflow: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 30%;
`;
