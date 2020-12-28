/** @format */

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import { Input, Button, Image } from "antd";

export default function EditImageInfo() {
	const router = useRouter();
	const [artwork, setArtWork] = useState([]);

	useEffect(() => {
		axios
			.get("https://www.artwiki-sh.com/api/artwork/" + `${router.query.id}/`)
			.then(({ data }) => {
				setArtWork(data);
			})
			.catch((error) => {});
	}, []);

	const onSubmit = () => {
		axios
			.patch(`https://www.artwiki-sh.com/api/artwork/${router.query.id}/`, {
				artwork,
			})
			.then(function () {
				console.log("성공");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleFormChange = (e) => {
		setArtWork({
			...artwork,
			[e.target.name]: e.target.value,
		});
		console.log(artwork);
	};

	const { TextArea } = Input;
	return (
		<>
			<UploadSection>
				<Picture>
					<Image src={artwork.image} width='100%' />
				</Picture>
				<Form>
					<FormSection>
						<FormLabel>제목</FormLabel>
						<Input
							name='title'
							textholder='제목'
							value={artwork.title}
							placeholder='제목'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작가</FormLabel>
						<Input
							name='artist'
							textholder='작가'
							value={artwork.artist}
							placeholder='작가'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>제작년도</FormLabel>
						<Input
							name='date'
							textholder='제작년도'
							value={artwork.date}
							placeholder='제작년도'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>재료</FormLabel>
						<Input
							name='medium'
							textholder='재료'
							value={artwork.medium}
							placeholder='재료'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>화파</FormLabel>
						<Input
							name='style'
							textholder='화파'
							value={artwork.style}
							placeholder='화파'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>소장처</FormLabel>
						<Input
							name='location'
							textholder='소장처'
							value={artwork.location}
							placeholder='소장처'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작품 크기</FormLabel>
						<Input
							name='demensions'
							textholder='작품 크기'
							value={artwork.demensions}
							placeholder='작품 크기'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작품 설명</FormLabel>
						<TextArea
							name='desc'
							textholder='작품 설명'
							value={artwork.desc}
							placeholder='작품 설명'
							onChange={handleFormChange}
							rows={4}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작품 요약</FormLabel>
						<TextArea
							name='short_desc'
							textholder='작품 요약'
							value={artwork.short_desc}
							placeholder='작품 요약'
							onChange={handleFormChange}
							showCount
							maxLength={150}
						/>
					</FormSection>
				</Form>
			</UploadSection>
			<Row>
				<Button onClick={onSubmit}>수정 완료</Button>
			</Row>
		</>
	);
}

const UploadSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 3rem 15rem;
`;
const Picture = styled.div`
	margin: 1rem;
	width: 60%;
	text-align: center;
`;
const Form = styled.div``;
const FormSection = styled.div`
	margin: 0.5rem;
`;
const FormLabel = styled.label``;
const Row = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 3rem;
`;
