import React from "react";

function Festival({ name, region, picture, rating }) {
  //app에서 보낸 인자를 받아보기
  //{ fav } = props;

  return (
    <div>
      <h2> {name} </h2>
      <h3> 지역 : {region} </h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

<i className="item-rating pointer zmdi zmdi-star-outline"></i>;
<i className="item-rating pointer zmdi zmdi-star-outline"> </i>;
const festivalILike = [
  {
    id: 1,
    name: "머드 축제",
    region: "충청남도 보령",
    image:
      "http://www.mudfestival.or.kr/template/festival/user/images/sub/history_img01.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "벚꽃 축제",
    region: "서울 여의도 ",
    image: "https://i.ytimg.com/vi/mHxZQSF1W6o/maxresdefault.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "서울 세계 불꽃 축제",
    region: "서울 여의도 ",
    image: "https://img.sbs.co.kr/newimg/news/20170924/201097006_1280.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "예산 맥주페스티벌",
    region: "충청남도 예산 ",
    image:
      "https://image.edaily.co.kr/images/photo/files/NP/S/2023/08/PS23082500285.jpg",
    rating: 3.8,
  },
];

function renderFestival(festival) {
  return (
    <Festival
      key={festival.id}
      name={festival.name}
      region={festival.region}
      picture={festival.image}
      rating={festival.rating}
    />
  );
}

function App() {
  return (
    <div>
      <h1>축제 소개</h1>
      {festivalILike.map((festival) => renderFestival(festival))}
    </div>
  );
}

export default App;
