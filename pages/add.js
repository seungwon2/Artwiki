/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NavBar from "../src/components/navBar";
import { message, Input, Button, Alert } from "antd";

export default function Add() {
	const [ImgURL, setImgURL] = useState(null);
	const [Image, setImage] = useState("");
	const [form, setForm] = useState({
		title: "",
		artist: "",
		date: "",
		medium: "",
		demensions: "",
		desc: "",
		short_desc: "",
		style: "",
		location: "",
	});

	const warning = () => {
		message.warning("모든 정보를 입력해주세요!");
	};
	const onChangeImage = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setImage(file);
			setImgURL(reader.result);
		};
		reader.readAsDataURL(file);
	};
	const handleFormChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = () => {
		const FormData = require("form-data");
		const artwork = new FormData();
		artwork.append("image", ImgURL);
		artwork.append("title", form.title);
		artwork.append("artist", form.artist);
		artwork.append("medium", form.medium);
		artwork.append("demensions", form.demensions);
		artwork.append("style", form.style);
		artwork.append("location", form.location);
		artwork.append("desc", form.desc);
		artwork.append("short_desc", form.short_desc);
		artwork.append("date", form.date);

		console.log(artwork);
		axios
			.post("https://www.artwiki-sh.com/api/artwork/", artwork)
			.then(function () {
				console.log("성공");
			})
			.catch(function (error) {
				warning();
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
	};

	const { TextArea } = Input;
	return (
		<Wrapper>
			<NavBar />
			<UploadSection>
				<Picture>
					<FileBox>
						<InputFile
							type='file'
							name='image'
							onChange={onChangeImage}
							id='image'
						/>
					</FileBox>
					<ImageArea>
						{ImgURL && <img className='preview' src={ImgURL} width='80%' />}
					</ImageArea>
					<Info>작품 이미지 업로드</Info>
				</Picture>
				<Form>
					<FormSection>
						<FormLabel>제목</FormLabel>
						<Input
							name='title'
							textholder='제목'
							value={form.title}
							placeholder='제목'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작가</FormLabel>
						<Input
							name='artist'
							textholder='작가'
							value={form.artist}
							placeholder='작가'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>제작년도</FormLabel>
						<Input
							name='date'
							textholder='제작년도'
							value={form.date}
							placeholder='제작년도'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>재료</FormLabel>
						<Input
							name='medium'
							textholder='재료'
							value={form.medium}
							placeholder='재료'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>화파</FormLabel>
						<Input
							name='style'
							textholder='화파'
							value={form.style}
							placeholder='화파'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>소장처</FormLabel>
						<Input
							name='location'
							textholder='소장처'
							value={form.location}
							placeholder='소장처'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작품 크기</FormLabel>
						<Input
							name='demensions'
							textholder='작품 크기'
							value={form.demensions}
							placeholder='작품 크기'
							onChange={handleFormChange}
						/>
					</FormSection>
					<FormSection>
						<FormLabel>작품 설명</FormLabel>
						<TextArea
							name='desc'
							textholder='작품 설명'
							value={form.desc}
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
							value={form.short_desc}
							placeholder='작품 요약'
							onChange={handleFormChange}
							showCount
							maxLength={150}
						/>
					</FormSection>
				</Form>
			</UploadSection>
			<Row>
				<Button onClick={onSubmit}>제출</Button>
			</Row>
		</Wrapper>
	);
}

const Wrapper = styled.div``;
const UploadSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5rem 25rem;
`;
const Picture = styled.div`
	margin: 1rem;
	width: 50%;
	text-align: center;
`;
const Info = styled.label`
	display: flex;
	justify-content: center;
`;
const FileBox = styled.div`
	width: 100%;
	margin: auto;
	align-item: center;
	justify-content: center;
	display: flex;
`;
const InputFile = styled.input``;
const ImageArea = styled.div`
	margin: 1rem;
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
