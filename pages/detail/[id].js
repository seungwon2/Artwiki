/** @format */

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import NavBar from "../../src/components/navBar";
import ImageDetail from "../../src/components/imageDetail";
import ImageInfo from "../../src/components/imageInfo";

export default function Detail() {
	const router = useRouter();

	useEffect(() => {
		axios
			.get("https://www.artwiki-sh.com/api/artwork/" + `${router.query.id}/`)
			.then(({ data }) => {
				setArtWork(data);
			})
			.catch((error) => {});
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
