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
					&nbsp;Simon  Hayhoe 의  독립적인  시각장애인  예술  감상 
					연구에 따르면 시각장애인 역시 또래 정아인만큼  예술  감상에  관심이 
					많다는  것을  확인할  수  있다.  하지만  시각  장애인이  스스로  예술 
					작품  감상을  하기  위한  경로는  특정  장비나  특정  장소에 
					국한되어  있어  접근성이  매우  낮고,  시각장애인들의  감상을  위한 
					조치를  해놓은  작품의  수가  매우  제한적이라는  문제점이  있다. 
					또한  현재  오디오  가이드나  인터넷으로  제공되는  전문가의  설명은 
					작품을  이용자가  스스로  감상할  수  있다는  것을  전제로  하고 
					있어  작품의  외양에  대한  자세한  설명을  배제하고  예술  작품에 
					대한  객관적인  분석만을  제공하고  있다.  따라서  현재  제공되고 
					있는  작품  설명은 시각장애인들이 작품의 내부 요소를 파악한 후 작품을 
					직접  해석하고,  작품에  대한  주관적인  판단을  하며 
					감상을 하기에 적합하지 않다.
					<br /> <br />
					&nbsp;따라서 본  연구에서는  작품  내부  요소를  다수의  인터넷 
					사용자가  라벨링  하여  내부  요소의  색감,  형태, 
					크기 설명과 함께 주관적인 감상을 입력할 수 있고, 라벨링  된  작품 
					내부  요소를  클릭해  작품  전체를  파악할  수  있는  크라우드  소싱 
					기반  온라인  아트  갤러리  ‘ArtWiki’를  제안한다.  이  온라인 
					아트 갤러리  이용을  통해 시각 
					장애인들이 터치스크린 기반 개인용 기기를 통해 더  많은  작품을  쉽게 
					접하고,  작품  내부  요소를  직접 
					터치하며 전체적인 구도와 각각의 특징을 파악할 수  있게  함으로써 
					한정적인  정보  수용에  그치던 
					시각장애인의 예술 감상 영역을 주체적인 예술 경험 
					단계로 확장할 수 있을 것으로 기대한다. 
				</Desc>
			</Text>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5rem 10rem;
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
