/** @format */

import React, { Component } from "react";
import styled from "styled-components";

export default class ThreadedContent extends Component {
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
