import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <li>
                <img src={`./img/${this.props.nr}.jpg`}></img>
            </li>
        )
    }
}

