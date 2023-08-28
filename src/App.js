import React from "react";

function Food({ name, picture }) {
  //app에서 보낸 인자를 받아보기
  //{ fav } = props;
  return (
    <div>
      <h2> I like {name} </h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/10/14/954d0e47cad6ce0f6bda194b5a4075b21.jpg",
  },
  {
    name: "ramen",
    image:
      "https://health.chosun.com/site/data/img_dir/2022/09/23/2022092301908_0.jpg",
  },
  {
    name: "jeyuk bokkeum",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/01/7ef9cedcbe5cceb5d3b17c81b305a9c21.jpg",
  },
  {
    name: "kimbab",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map((dish) => renderFood(dish))}</div>;
}

export default App;
