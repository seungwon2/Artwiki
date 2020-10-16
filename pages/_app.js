/** @format */

import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

export default class Timeline extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<GlobalStyle />
				<Head>
					<title>artwiki</title>
				</Head>
				<Wrapper>
					<Component {...pageProps} />
				</Wrapper>
			</>
		);
	}
}

const Wrapper = styled.div``;
