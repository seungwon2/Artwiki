/** @format */

import React from "react";
import styled from "styled-components";

import NavBar from "../src/components/navBar";
import Carousel from "../src/components/carousel";
import Intro from "../src/components/intro";
import ThemeView from "../src/components/themeView";
import AllView from "../src/components/allView";

export default function Home() {
	return (
		<Wrapper>
			<NavBar />
			<Carousel />
			<Intro />
			<ThemeView />
			<AllView />
		</Wrapper>
	);
}

const Wrapper = styled.div``;
