/** @format */

import React from "react";
import styled from "styled-components";

import { Carousel } from "antd";

export default function Slide() {
	const contentStyle = {
		height: "450px",
		color: "#fff",
		lineHeight: "450px",
		textAlign: "center",
		background: "lightgrey",
		margin: "auto",
	};

	return (
		<Carousel autoplay>
			<div>
				<img
					src='/banner.png'
					height='450px'
					width='auto'
					style={contentStyle}
				/>
			</div>
			<div>
				<img
					src='/banner2.png'
					height='450px'
					width='auto'
					style={contentStyle}
				/>
			</div>
		</Carousel>
	);
}
