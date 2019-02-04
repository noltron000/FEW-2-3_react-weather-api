import React, { Component } from 'react'

class InputZip extends Component {
	render() {
		return (
			<input
				value={this.props.inputValue}
				onChange={this.props.onChange}
				type="text"
				pattern="(\d{5}([\-]\d{4})?)"
				placeholder="enter zip"
				class='input-zip'
			/>
		)
	}
}

export default InputZip