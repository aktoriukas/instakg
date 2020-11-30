import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        let display = this.props.display;

        return (
            <li
                style={display}
                className={this.props.classList}
            >
                <button className='button prev'
                    onClick={this.props.prevImage}
                > ᗕ </button>
                <img 
                    src={`./img/${this.props.nr}.jpg`}
                    onClick={this.props.changeDisplay}
                    alt={this.props.nr}
                    id={this.props.nr}
                ></img>
                <button className='button next'
                    onClick={this.props.nextImage}
                > ᗒ </button>
            </li>
        )
    }
}

