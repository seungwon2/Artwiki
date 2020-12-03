/** @format */

import React from "react";
import styled from "styled-components";

import NavBar from "../../src/components/navBar";
import ImageDetail from "../../src/components/imageDetail";
import ImageInfo from "../../src/components/imageInfo";

export default function Detail({ id }) {
	const [ArtWork, setArtWork] = useState([]);
	axios
		.get(
			"http://ec2-54-180-96-236.ap-northeast-2.compute.amazonaws.com:8000/api/artwork/"+${id}/
		)
		.then(({ data }) => {
			setArtWork(data);
		})
		.catch((err) => {
			console.log(err);
		});
	// const ArtWork = {
	// 	id: 1,
	// 	image: "/starrynight.jpeg",
	// 	title: "별이 빛나는 밤",
	// 	artist: "빈센트 반 고흐",
	// 	date: "1889",
	// 	medium: "캔버스에 유화",
	// 	location: "MoMA",
	// 	style: "후기 인상주의",
	// 	dimensions: "921 X 737",
	// 	desc:
	// 		"반 고흐 의 밤하늘은 에너지가 가득한 곳입니다. 폭발하는 별 아래 마을은 조용한 질서의 장소입니다. 하늘과 땅을 연결하면 flamelike 사이프러스하는 것입니다 나무 전통적으로 묘지와 애도와 관련. 그러나 반 고흐에게 죽음은 불길한 것이 아닙니다. 그는 '별을 바라 보는 것은 항상 저를 꿈꾸게합니다.'라고 말했습니다. '왜 하늘의 빛나는 점이 프랑스 지도 에있는 검은 점만큼 접근 할 수 있어야하지 않습니까? 기차를 타고 Tarascon 이나 Rouen에 가면 별에 도달하기 위해 죽음을 맞이합니다. 작가는 자신의 경험을 동생 테오에게 이렇게 썼다. '오늘 아침 나는 해가 뜨기 훨씬 전부터 내 창문에서 나라를 보았는데, 그 나라는 아주 크게 보였던 아침 별 뿐이었다.' 오늘 아침 별 또는 금성은 별이 빛나는 밤의 중앙 바로 왼쪽에있는 커다란 흰색 별일 수 있습니다. 반면에 작은 마을이 발명되었으며 교회 첨탑은 반 고흐의 고향 인 네덜란드를 연상시킵니다. 이 그림은 낮의 동반자 인 올리브 나무와 마찬가지로 상상력과 기억력에 뿌리를두고 있습니다. 이 강렬한 그림에서와 같이 반 고흐는 불안한 느낌과 강렬한 색채를 위해 자연에 대한 인상파 진리의 교리를 뒤로하고 그의 작품을 모든 후속 표현주의 회화의 시금석으로 만들었습니다.",
	// };
	return (
		<Wrapper>
			<NavBar />
			<ImageDetail image={ArtWork.image} id={ArtWork.id} />
			<ImageInfo
				id={ArtWork.id}
				title={ArtWork.title}
				artist={ArtWork.artist}
				date={ArtWork.date}
				medium={ArtWork.medium}
				location={ArtWork.location}
				style={ArtWork.style}
				dimensions={ArtWork.dimensions}
				desc={ArtWork.desc}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 0 5rem;
`;
