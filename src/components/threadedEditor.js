/** @format */

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Annotation from "react-image-annotation";
import { RectangleSelector } from "react-image-annotation/lib/selectors";
import axios from "axios";

import TextEditor from "./TextEditor";

export default class ThreadedEditor extends Component {
	state = { text: "" };

	onUpdateText = (e) => {
		const { props } = this;
		props.onChange({
			...props.annotation,
			data: {
				...props.annotation.data,
				comments: [
					this.props.annotation.data
						? {
								...this.props.annotation.data.comments[0],
								text: e.target.value,
						  }
						: {
								id: Math.random(),
								text: e.target.value,
						  },
				],
			},
		});
	};

	render() {
		const { props } = this;
		const { geometry } = props.annotation;
		if (!geometry) return null;

		return (
			<EditorContainer
				className={props.className}
				style={{
					position: "absolute",
					left: `${geometry.x}%`,
					top: `${geometry.y + geometry.height}%`,
					...props.style,
				}}>
				<TextEditor
					onChange={this.onUpdateText}
					onSubmit={props.onSubmit}
					value={
						props.annotation.data ? props.annotation.data.comments[0].text : ""
					}
				/>
			</EditorContainer>
		);
	}
}

class ThreadedContent extends Component {
	state = {
		editorText: "",
	};

	onUpdateEditorText = (e) => {
		this.setState({ editorText: e.target.value });
	};

	renderComment(comment) {
		return (
			<Comment key={comment.id}>
				{comment.text}
				<CommentDescription>
					<UserPill>User</UserPill>
				</CommentDescription>
			</Comment>
		);
	}

	render() {
		const { props } = this;
		const { annotation } = props;
		const { geometry } = annotation;
		const comments = annotation.data && annotation.data.comments;

		return (
			<React.Fragment>
				<Content
					key={props.annotation.data.id}
					style={{
						position: "absolute",
						left: `${geometry.x}%`,
						top: `${geometry.y + geometry.height}%`,
					}}>
					<ContentClearanceTop />
					<ContentClearanceLeft />
					<ContentClearanceRight />
					{comments && comments.map(this.renderComment)}
					<TextEditor
						value={this.state.editorText}
						onChange={this.onUpdateEditorText}
						onBlur={props.onBlur}
						onFocus={props.onFocus}
						onSubmit={(e) => {
							const annotationIndex = props.annotations.indexOf(annotation);
							const annotations = props.annotations.map((annotation, i) =>
								i === annotationIndex
									? {
											...annotation,
											data: {
												...annotation.data,
												comments: [
													...comments,
													{ id: Math.random(), text: this.state.editorText },
												],
											},
									  }
									: annotation
							);

							this.setState({ editorText: "" });
							props.setAnnotations(annotations);
						}}
					/>
				</Content>
			</React.Fragment>
		);
	}
}

const Content = styled.div`
	background: white;
	border-radius: 2px;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	margin: 8px 0;
`;

const ContentClearanceTop = styled.div`
	position: absolute;
	height: 8px;
	top: -8px;
	left: -17px;
	right: -17px;
`;

const ContentClearanceLeft = styled.div`
	position: absolute;
	height: 100%;
	left: -17px;
	width: 20px;
`;

const ContentClearanceRight = styled.div`
	position: absolute;
	height: 100%;
	right: 0px;
	width: 20px;
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const EditorContainer = styled.div`
	background: white;
	border-radius: 2px;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	margin-top: 16px;
	transform-origin: top left;
	animation: ${fadeInScale} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	overflow: hidden;
`;

const Comment = styled.div`
	border-bottom: 1px solid whitesmoke;
	padding: 8px 16px;
`;

const CommentDescription = styled.div`
	margin: 10px 0;
`;

const UserPill = styled.span`
	background-color: #2fb3c6;
	border-radius: 4px;
	color: white;
	padding: 2px 4px;
	font-size: 13.5px;
`;
