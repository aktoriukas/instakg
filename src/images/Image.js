import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <li>
                <a
                    href={`#${this.props.nr}`}
                >
                    <img 
                        src={`./img/${this.props.nr}.jpg`}
                        onClick={this.props.changeDisplay}
                        alt={this.props.nr}
                        id={this.props.nr}
                    ></img>
                </a>
            </li>
        )
    }
}

