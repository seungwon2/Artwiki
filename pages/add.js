/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NavBar from "../src/components/navBar";
import { message, Form, Input, Button, Alert } from "antd";

export default function Add() {
	const [ImgURL, setImgURL] = useState(null);
	const [Image, setImage] = useState("");
	const [artinfo, setArtinfo] = useState({});

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

	const onFinish = (values) => {
		console.log(values);
		setArtinfo(values);
		const FormData = require("form-data");
		const artwork = new FormData();
		artwork.append("image", ImgURL);
		artwork.append("title", artinfo.title);
		artwork.append("artist", artinfo.artist);
		artwork.append("medium", artinfo.medium);
		artwork.append("demensions", artinfo.demensions);
		artwork.append("style", artinfo.style);
		artwork.append("location", artinfo.location);
		artwork.append("desc", artinfo.desc);
		artwork.append("short_desc", artinfo.short_desc);

		console.log("artwork: ", artwork);

		axios
			.post("https://www.artwiki-sh.com/api/artwork/", artwork)
			.then(function () {
				console.log("성공");
			})
			.catch(function (error) {
				warning();
				console.log(error);
			});
	};
	const validateMessages = {
		required: "${label} 입력해주세요!",
	};
	const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 16,
		},
	};

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
				<Form
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					validateMessages={validateMessages}>
					<Form.Item
						name={["artinfo", "title"]}
						label='title'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "artist"]}
						label='artist'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "medium"]}
						label='medium'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "location"]}
						label='location'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "style"]}
						label='style'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "demensions"]}
						label='demensions'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "desc"]}
						label='desc'
						rules={[
							{
								required: true,
							},
						]}>
						<Input.TextArea />
					</Form.Item>
					<Form.Item
						name={["artinfo", "short_desc"]}
						label='short_desc'
						rules={[
							{
								required: true,
							},
						]}>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button onClick={onFinish} type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</UploadSection>
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
