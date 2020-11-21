/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Annotation from "react-image-annotation";
import axios from "axios";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import NavBar from "../../../src/components/navBar";

export default function Label() {
	// axios
	// 	.get(
	// 		"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/",
	// 		{ annotations }
	// 	)
	// 	.then(console.log(annotation))
	// 	.catch(function (error) {
	// 		if (error.response) {
	// 			// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.

	// 			console.log(error.response.data);
	// 			console.log(error.response.status);
	// 			console.log(error.response.headers);
	// 		} else if (error.request) {
	// 			// 요청이 이루어 졌으나 응답을 받지 못했습니다.
	// 			// `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
	// 			// Node.js의 http.ClientRequest 인스턴스입니다.
	// 			console.log(error.request);
	// 		} else {
	// 			// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
	// 			console.log("Error", error.message);
	// 		}
	// 		console.log(error.config);
	// 	});
	// 	0: {data: {id: 0.05229170380337478 , text: "흰색, 별, 큰" }, geometry: {height: 14.841535686678696
	// 		,type: "RECTANGLE",
	// 		width: 14.007753232059063,
	// 		x: 27.991393541446403,
	// 		y: 45.50139373638471}}
	// data:
	// id: 0.05229170380337478
	// text: "흰색, 별, 큰"
	// __proto__: Object
	// geometry:
	// height: 14.841535686678696
	// type: "RECTANGLE"
	// width: 14.007753232059063
	// x: 27.991393541446403
	// y: 45.50139373638471
	// __proto__: Object
	// __proto__: Object

	const [annotations, setAnnotations] = useState([
		{
			data: { id: 0.05229170380337478, text: "흰색, 별, 큰" },
			geometry: {
				height: 14.841535686678696,
				type: "RECTANGLE",
				width: 14.007753232059063,
				x: 27.991393541446403,
				y: 45.50139373638471,
			},
		},
		{
			data: { id: 0.16174103806614348, text: "달, 큰, 노란, 흔들리는" },
			geometry: {
				height: 15.291279192335619,
				type: "RECTANGLE",
				width: 12.227106634763416,
				x: 84.25982601598872,
				y: 9.371998781944672,
			},
		},
		{
			data: {
				id: 0.9937699858028768,
				text: "검은, 구불구불한, 수풀,  큰, 우울한",
			},
			geometry: {
				height: 97.74425522943946,
				type: "RECTANGLE",
				width: 39.0555153673511,
				x: 9.235249383265632,
				y: 2.026188189548148,
			},
		},
		{
			data: { id: 0.48777016059923306, text: "뾰족한, 지붕, 교회" },
			geometry: {
				height: 23.836405799817285,
				type: "RECTANGLE",
				width: 5.816778884499108,
				x: 54.46367295457496,
				y: 63.19130495889064,
			},
		},
		{
			data: {
				id: 0.702110790190984,
				text: "들, 밭, 푸른, 구불구불한, 검은 선, 굵은, 우울한",
			},
			geometry: {
				height: 12.780944773247157,
				type: "RECTANGLE",
				width: 29.257353152583292,
				x: 69.94048474741957,
				y: 70.76358883119713,
			},
		},
	]);
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
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
