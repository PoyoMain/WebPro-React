const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Broccoli", type: "Vegetable" },
  { name: "Orange", type: "Fruit" },
  { name: "Spinach", type: "Vegetable" }
];

class HelloWorld extends React.Component {
  render() { return <h1>Hello World!</h1>; }
}

class Counter extends React.Component {
  state = { count: 5 };
  incrementCount = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div className="counter">
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.name}>{item.name} - {item.type}</li>
        ))}
      </ul>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
        <hr/>
        <Counter/>
        <hr/>
        <List items={produce}/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
