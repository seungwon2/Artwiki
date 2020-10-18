/** @format */

import React from "react";
import styled from "styled-components";

export default function Intro() {
	return (
		<Wrapper>
			<Image>
				<img src='/logo.png' width='90%' />
			</Image>

			<Text>
				<Title>2020 HCI LAB ArtWiki Project</Title>
				<Desc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					commodo, magna sodales semper mattis, enim libero blandit elit, quis
					finibus sapien sem vestibulum leo. Maecenas placerat purus quis
					accumsan ullamcorper. Nunc pretium lorem quis felis consectetur
					gravida. Nullam non consequat urna. Ut quis elit eget nulla posuere
					mollis. Vestibulum dictum lacus massa, eu tincidunt felis placerat eu.
					Etiam id condimentum diam. Aenean mauris quam, consectetur vitae
					dignissim quis, pharetra at tortor. Nam molestie tincidunt elit sed
					facilisis. Proin efficitur auctor lectus non imperdiet. Donec suscipit
					nulla in convallis dictum. Ut justo nibh, viverra eget tellus sit
					amet, porta porttitor arcu. Proin faucibus condimentum metus quis
					tristique. Morbi pellentesque nulla ac luctus cursus. Sed faucibus
					erat orci, at egestas urna molestie eu. Maecenas id felis et nunc
					sollicitudin vulputate. Donec posuere aliquet augue, eget bibendum
					odio hendrerit a. Suspendisse euismod ante ac massa faucibus, ac
					ornare nunc eleifend. Etiam nec nisi fermentum, imperdiet urna in,
					bibendum lectus. Donec bibendum, lectus nec iaculis pulvinar, elit
					erat aliquet velit, sit amet rutrum purus purus molestie urna. Sed
					quis massa erat. Donec nec est eros.
				</Desc>
			</Text>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10rem;
	align-items: center;
`;
const Title = styled.label`
	font-size: 1.2rem;
`;
const Desc = styled.label``;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1;
`;
const Image = styled.div`
	flex: 1 1;
`;
