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
				if (error.response) {
					// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// 요청이 이루어 졌으나 응답을 받지 못했습니다.
					// `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
					// Node.js의 http.ClientRequest 인스턴스입니다.
					console.log("두번째" + error.request);
				} else {
					// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
					console.log("Error", error.message);
				}
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
