'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// I'm just a comment

var Toggle = function (_React$Component) {
	_inherits(Toggle, _React$Component);

	function Toggle(props) {
		_classCallCheck(this, Toggle);

		var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

		_this.toggle = _this.toggle.bind(_this);

		_this.state = {
			toggle: false
		};
		return _this;
	}

	_createClass(Toggle, [{
		key: 'toggle',
		value: function toggle() {
			this.setState(function (ps) {
				return {
					toggle: !ps.toggle
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Toggle App'
				),
				React.createElement(
					'button',
					{ onClick: this.toggle },
					this.state.toggle ? 'Hide text' : 'Show text'
				),
				this.state.toggle && React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						'I\'m a super secret text'
					)
				)
			);
		}
	}]);

	return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));
