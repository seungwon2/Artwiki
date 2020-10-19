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
	};
	const test = {
		textAlign: "center",
		background: "black",
		margin: "auto",
	};
	return (
		<Carousel autoplay>
			<div>
				<h3 style={contentStyle}>1</h3>
				{/* <img src='/banner.jpg' height='400px' width='auto' style={test} /> */}
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
	);
}
