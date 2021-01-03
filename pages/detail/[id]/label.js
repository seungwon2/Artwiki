/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import axios from "axios";
import { useRouter } from "next/router";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import NavBar from "../../../src/components/navBar";
import ThreadedContent from "../../../src/components/threadedContent2";
import ThreadedEditor from "../../../src/components/threadedEditor";
import { Button } from "antd";
export default function Label() {
	const router = useRouter();
	const [annotations, setAnnotations] = useState([]);
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

	return (
		<Wrapper>
			<NavBar />
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
			<ButtonCover>
				<Button
					onClick={() => {
						router.push({
							pathname: "/detail/[id]",
							query: { id: router.query.id },
						});
					}}>
					돌아가기
				</Button>
			</ButtonCover>
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
const ButtonCover = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 5rem;
`;
