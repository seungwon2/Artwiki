/** @format */

import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "../src/components/navBar";
import { Upload, message, Form, Input, InputNumber, Button } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
	}
}

export default function Add() {
	const [imageUrl, setImageUrl] = useState({});
	const [loading, setLoading] = useState(false);

	const handleChange = (info) => {
		if (info.file.status === "uploading") {
			setLoading(true);
			return;
		}
		if (info.file.status === "done") {
			getBase64(info.file.originFileObj, (imageUrl) => setImageUrl(imageUrl));
		}
	};
	const onFinish = (values) => {
		console.log(values);
	};
	const validateMessages = {
		required: "${label} 입력해주세요!",
		types: {
			email: "${label} is not a valid email!",
			number: "${label} is not a valid number!",
		},
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
					<Upload
						name='picture'
						listType='picture-card'
						className='avatar-uploader'
						showUploadList={false}
						action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
						beforeUpload={beforeUpload}
						onChange={handleChange}>
						{loading && <img src={imageUrl} style={{ width: "100%" }} />}
						{!loading && <PlusOutlined />}
					</Upload>
					<Info>박스를 눌러서 이미지 업로드</Info>
				</Picture>
				<Form
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					validateMessages={validateMessages}>
					<Form.Item
						name={["artinfo", "제목"]}
						label='제목'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "작가"]}
						label='작가'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "재료"]}
						label='재료'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "소장처"]}
						label='소장처'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "화파"]}
						label='화파'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "작품 크기"]}
						label='작품 크기'
						rules={[
							{
								required: true,
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						name={["artinfo", "설명"]}
						label='설명'
						rules={[
							{
								required: true,
							},
						]}>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type='primary' htmlType='submit'>
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
`;
const Info = styled.label`
	display: flex;
	justify-content: center;
`;
