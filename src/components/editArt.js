/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";
import ThreadedContent from "./threadedContent";
import ThreadedEditor from "./threadedEditor";

import Scrollbar from "react-scrollbars-custom";
import { Button } from "antd";
import { useRouter } from "next/router";
import Comment from "./comment";

export default function EditArt() {
	const router = useRouter();
	const [annotations, setAnnotations] = useState([]);
	const [annotation, setAnnotation] = useState({});
	const [activeAnnotations, setActiveAnnotations] = useState([]);
	const [picture, setPicture] = useState();

	useEffect(() => {
		axios
			.get(`https://www.artwiki-sh.com/api/artwork/${router.query.id}/`)
			.then(({ data }) => {
				setAnnotations(data.annotations);
				setPicture(data.image);
			})
			.catch(function (error) {});
	}, []);
	const handleSubmit = () => {
		axios
			.patch(`https://www.artwiki-sh.com/api/artwork/${router.query.id}/`, {
				annotations,
			})
			.then()
			.catch(function (error) {});
	};

	const onClick = (id, key) => {
		const newAnnotations = [...annotations].map((annotation) => {
			const { data } = annotation;
			const comments = data.comments.filter((comment) => comment.id !== id);
			return { ...annotation, data: { ...data, comments } };
		});
		setAnnotations(newAnnotations);
		newAnnotations.map((annotation) => {
			if (annotation.data.comments.length === 0) {
				setAnnotations(
					newAnnotations.filter((annotation) => annotation.data.id !== key)
				);
			}
		});
	};

	const onChange = (annotation) => {
		setAnnotation(annotation);
	};

	const onSubmit = (annotation) => {
		const { geometry, data } = annotation;
		setAnnotation({});
		setAnnotations([
			...annotations,
			{ data: { id: Math.random(), ...data }, geometry },
		]);
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
	};

	return (
		<Wrapper>
			<PictureArea>
				<ImageArea>
					<Annotation
						src={picture}
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
				</ImageArea>
				<Phantom />
				<LabelBox>
					<Label>Annotation List</Label>
					<Scrollbar style={{ height: 800 }}>
						{annotations.map((annotation) => (
							<Comment
								data={annotation}
								onMouseOver={onMouseOver}
								onMouseOut={onMouseOut}
								key={annotation.data.id}
								onClick={onClick}
							/>
						))}
					</Scrollbar>
				</LabelBox>
			</PictureArea>
			<ButtonArea>
				<Button
					onClick={() => {
						router.push({
							pathname: "/detail/[id]",
							query: { id: router.query.id },
						});
					}}>
					돌아가기
				</Button>
				<Phantom />
				<Button onClick={handleSubmit}>편집 저장</Button>
			</ButtonArea>
		</Wrapper>
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
	margin: 0rem 15rem 5rem 15rem;
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
const Phantom = styled.div`
	width: 3rem;
`;
const CommentArea = styled.div`
	width: 50%;
`;
const PictureArea = styled.div`
	display: flex;
	margin: 5rem;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImageArea = styled.div`
	width: 65%;
`;
