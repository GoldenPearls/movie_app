import React from "react";

// 클래스형 컴포넌트가 되려면 App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속해야 한다.
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    //this.state.count = 1;
    this.setState((current) => ({ count: this.state.count + 1 })); //current는 인자값
  };

  minus = () => {
    // console.log('minus')
    //1. this.state.count = -1; state(private)는 직접접근이 안되기에 setState로 간접접근(getter, setter)
    // 2. this.setState({ count: this.state.count - 1 }); //count state를 -1만큼 감소
    // 3. current인자를 받아 객체  { count: this.state.count - 1 }를 반환하는 함수로 작성
    this.setState((current) => ({ count: this.state.count + -1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
