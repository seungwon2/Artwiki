/** @format */

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import NavBar from "../../src/components/navBar";
import ImageDetail from "../../src/components/imageDetail";
import ImageInfo from "../../src/components/imageInfo";

export default function Detail(props) {
	const router = useRouter();

	useEffect(() => {
		axios
			.get(
				"http://ec2-15-164-224-168.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/" +
					`${router.query.id}/`
			)
			.then(({ data }) => {
				console.log(data);
				setArtWork(data);
			})
			.catch((error) => {
				console.log(error.config);
				if (error.response) {
					// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// 요청이 이루어 졌으나 응답을 받지 못했습니다.
					// `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
					// Node.js의 http.ClientRequest 인스턴스입니다.
					console.log(error.request);
				} else {
					// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
					console.log("Error", error.message);
				}
				console.log(error.config);
			});
	}, []);

	const [ArtWork, setArtWork] = useState([]);

	return (
		<>
			<NavBar />
			<Wrapper>
				<ImageDetail image={ArtWork.image} id={ArtWork.id} />
				<ImageInfo
					id={router.query.id}
					title={ArtWork.title}
					artist={ArtWork.artist}
					date={ArtWork.date}
					medium={ArtWork.medium}
					location={ArtWork.location}
					style={ArtWork.style}
					dimensions={ArtWork.demensions}
					desc={ArtWork.desc}
				/>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	margin: 0 5rem;
`;
