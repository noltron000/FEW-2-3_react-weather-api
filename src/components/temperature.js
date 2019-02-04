import React, { Component } from 'react';

class Temperature extends Component {
	render() {
		// Kelvin -> Fahrenheit
		const newTemp = Math.round((this.props.temp - 273.15) * 9 / 5 + 32)
		return (
			<div>{this.props.label}: {newTemp}ºF</div>
		)
	}
}

export default Temperature