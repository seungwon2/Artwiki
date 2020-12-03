/** @format */

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";

import TextEditor from "../src/components/TextEditor";
import NavBar from "../src/components/navBar";
import ThreadedContent from "../src/components/threadedContent";
import ThreadedEditor from "../src/components/threadedEditor";

export default class Threaded extends Component {
	state = {
		activeAnnotations: [],
		annotations: [],
		annotation: {},
	};
	//서버에서 저장되어있는 데이터 불러오기
	componentDidMount() {
		// 	axios
		// 		.get(
		// 			"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/1234/"
		// 		)
		// 		.then(({ data }) => {
		// 			console.log(data.annotations);
		// 			this.setState({ annotations: data.annotations });
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error.config);
		// 		});
	}

	onChange = (annotation) => {
		this.setState({ annotation });
	};

	onSubmit = (annotation) => {
		const { geometry, data } = annotation;

		this.setState({
			annotation: {},
			annotations: this.state.annotations.concat({
				geometry,
				data: {
					...data,
					id: Math.random(),
				},
			}),
		});
		console.log(this.state.annotations);
	};

	renderEditor = (props) => {
		const { geometry } = props.annotation;
		if (!geometry) return null;

		return <ThreadedEditor {...props} />;
	};

	renderContent = ({ key, annotation }) => {
		return (
			<ThreadedContent
				key={key}
				annotation={annotation}
				annotations={this.state.annotations}
				setAnnotations={(annotations) => this.setState({ annotations })}
				onFocus={this.onFocus(key)}
				onBlur={this.onBlur(key)}
			/>
		);
	};

	onFocus = (id) => (e) => {
		this.setState({
			activeAnnotations: [...this.state.activeAnnotations, id],
		});
	};

	onBlur = (id) => (e) => {
		const index = this.state.activeAnnotations.indexOf(id);

		this.setState({
			activeAnnotations: [
				...this.state.activeAnnotations.slice(0, index),
				...this.state.activeAnnotations.slice(index + 1),
			],
		});
	};

	activeAnnotationComparator = (a, b) => {
		return a.data.id === b;
	};

	render() {
		return (
			<>
				<NavBar />
				<Wrapper>
					<Annotation
						src='/starrynight.jpeg'
						alt='Two pebbles anthropomorphized holding hands'
						activeAnnotationComparator={this.activeAnnotationComparator}
						activeAnnotations={this.state.activeAnnotations}
						annotations={this.state.annotations}
						type={this.state.type}
						value={this.state.annotation}
						renderEditor={this.renderEditor}
						renderContent={this.renderContent}
						onChange={this.onChange}
						onSubmit={this.onSubmit}
					/>
				</Wrapper>
			</>
		);
	}
}
const Wrapper = styled.div`
	margin: 10rem;
`;
