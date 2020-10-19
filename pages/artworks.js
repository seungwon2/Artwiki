/** @format */

import React from "react";
import styled from "styled-components";

import NavBar from "../src/components/navBar";
import AllView from "../src/components/allView";
export default function ArtWorks() {
	return (
		<Wrapper>
			<NavBar />
			<AllView />
		</Wrapper>
	);
}

const Wrapper = styled.div``;
