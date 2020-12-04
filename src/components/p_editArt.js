/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";

import Scrollbar from "react-scrollbars-custom";
import Comment from "./comment";
import { Button } from "antd";

export default function P_EditArt({ image }) {
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
	const handleSubmit = () => {
		axios
			.patch(
				"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/",
				{ annotations }
			)
			.then(console.log(annotation))
			.catch(function (error) {
				console.log(error.config);
			});
		console.log("clicked");
	};
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

	const handleQuit = () => {
		console.log("quit");
	};

	return (
		<Wrapper>
			<ImageAnnotation>
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

				<LabelBox>
					<Label>Annotation List</Label>
					<Scrollbar style={{ height: 800 }}>
						{annotations.map((annotation) => (
							<Comment
								onMouseOver={onMouseOver(annotation.data.id)}
								onMouseOut={onMouseOut(annotation.data.id)}
								key={annotation.data.id}
								data={annotation.data.text}
								id={annotation.data.id}
								onClick={onClick}
							/>
						))}
					</Scrollbar>
					<ButtonArea>
						<Button onClick={handleSubmit}>편집 저장</Button>
						<Blank />
						<Button onClick={handleQuit}>편집 완료</Button>
					</ButtonArea>
				</LabelBox>
			</ImageAnnotation>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 90%;
	margin: 5rem auto;
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
const ImageAnnotation = styled.div`
	display: flex;
	justify-content: space-around;
`;
const ImageArea = styled.div`
	width: 65%;
`;
