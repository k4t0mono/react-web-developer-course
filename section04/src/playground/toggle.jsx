// I'm just a comment

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		
		this.toggle = this.toggle.bind(this);

		this.state = {
			toggle: false
		}
	}

	toggle() {
		this.setState((ps) => {
			return {
				toggle: !ps.toggle
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Toggle App</h1>
				<button onClick={ this.toggle }>
					{ this.state.toggle ? 'Hide text' : 'Show text' }
				</button>
				{ this.state.toggle && (
					<div><p>I'm a super secret text</p></div>
				) }
			</div>
		)
	}
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

