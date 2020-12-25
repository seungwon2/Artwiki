/** @format */

import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "../src/components/navBar";
import { message, Form, Input, Button, Alert } from "antd";

export default function Add() {
	const [ImgURL, setImgURL] = useState(null);
	const [Image, setImage] = useState("");
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
		const FormData = require("form-data");
		const form_data = new FormData();
		form_data.append("r_phone_num", form.rPhoneNum);
		form_data.append("doodle", Doodle);
		form_data.append("post_code", postCode);
		form_data.append("base_address", baseAddress);
		form_data.append("redesign", redesign);
		form_data.append("amount", amount);
		form_data.append("receiver", form.receiver);
		form_data.append("o_phone_num", form.oPhoneNum);
		form_data.append("order", form.order);
		form_data.append("email", form.email);
		form_data.append("detail_address", form.detailAddress);

		axios
			.post("https://www.doodlehj.com/api/produce/", form_data)
			.then(function () {
				setStep(step + 1);
			})
			.catch(function () {
				warning();
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
