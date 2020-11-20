import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <li>
                <img src={`./img/${this.props.nr}.jpg`}
                    onClick={this.props.changeDisplay}
                    alt={this.props.nr}
                ></img>
            </li>
        )
    }
}

