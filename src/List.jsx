import React from "react";

class List extends React.Component {
  state = {
    numbers: [
      { id: 1, number: 1 },
      { id: 2, number: 2 },
      { id: 3, number: 3 },
    ],
  };

  addRandomNumber = () => {
    const randomNumber = Math.round(Math.random() * 10);
    this.setState({
      numbers: [
        ...this.state.numbers,
        {
          id: this.state.numbers.length + 1,
          number: randomNumber,
        },
      ],
    });
  };

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", {
      prevProps,
      prevState,
      currentProps: this.props,
      currentState: this.state,
    });
    if (this.state.numbers.length !== prevState.numbers.length) {
      console.log("List of numbers update!");
    }
  }

  componentWillUnmount() {
    console.log("Component is un mount");
  }

  render() {
    return (
      <div>
        <h2>Class component</h2>
        <ul>
          {this.state.numbers.map((number) => (
            <li key={number.id}>{number.number}</li>
          ))}
        </ul>
        <button onClick={this.addRandomNumber}>Add new random number</button>
      </div>
    );
  }
}

export default List;
