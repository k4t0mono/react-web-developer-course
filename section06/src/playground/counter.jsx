class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);

		this.state = { count: 0 }
	}

	componentDidMount() {
		const count = parseInt(localStorage.getItem('count'))
		if(isNaN(count)) { return; }

		this.setState(() => ({ count }));
	}

	componentDidUpdate(prevProps, prevState) {
		localStorage.setItem('count', this.state.count);		
	}

	addOne() {
		this.setState((ps) => {
			return {
				count: ps.count + 1
			}
		});
	}

	minusOne() {
		this.setState((ps) => {
			return {
				count: ps.count - 1
			}
		});
	}

	reset() {
		this.setState((ps) => {
			return {
				count: 0
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Count: { this.state.count }</h1>
				<button onClick={ this.addOne }>+1</button>
				<button onClick={ this.minusOne }>-1</button>
				<button onClick={ this.reset }>Reset</button>
			</div>
		);
	}
}


ReactDOM.render(<Counter />, document.getElementById('app'));
