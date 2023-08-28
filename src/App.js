import React from "react";

function Food({ name, picture, rating }) {
  //app에서 보낸 인자를 받아보기
  //{ fav } = props;
  return (
    <div>
      <h2> I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2020/10/14/954d0e47cad6ce0f6bda194b5a4075b21.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://health.chosun.com/site/data/img_dir/2022/09/23/2022092301908_0.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "jeyuk bokkeum",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/01/7ef9cedcbe5cceb5d3b17c81b305a9c21.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "kimbab",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
    rating: 3.8,
  },
];

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map((dish) => renderFood(dish))}</div>;
}

export default App;
