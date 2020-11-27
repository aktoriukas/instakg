import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        let display = this.props.display;

        return (
            <li
                style={display}
            >
                <img 
                    src={`./img/${this.props.nr}.jpg`}
                    onClick={this.props.changeDisplay}
                    alt={this.props.nr}
                    id={this.props.nr}
                ></img>
            </li>
        )
    }
}

