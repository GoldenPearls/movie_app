import React from "react";

// 클래스형 컴포넌트가 되려면 App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속해야 한다.
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: this.state.count + 1 })); //current는 인자값
  };

  minus = () => {
    this.setState((current) => ({ count: this.state.count + -1 }));
  };

  constructor(props) {
    //1. constructor가 먼저 실행되고
    super(props);
    console.log("hello constructor");
  }

  componentDidMount() {
    // 3. 그 다음에 componentDidMount
    console.log("I'm rendering!");
  }

  componentDidUpdate() {
    // 4. 그 다음에 componentDidUpdate
    console.log("I just updated");
  }

  componentWilUpdate() {
    // 5. 그 다음에 삭제 될 때
    console.log("Goodbye!");
  }

  render() {
    // 2. 그 다음에 render가 실행
    console.log("hello render!");
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
