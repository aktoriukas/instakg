import React, { Component } from 'react';
import Image from './Image';

export default class Images extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayFlex: false

        }
        this.changeDisplay = this.changeDisplay.bind(this)
    }
    changeDisplay(e) {
        console.log(e.target);
        this.setState({
            displayFlex: !this.state.displayFlex
        })
    }
    
    render() {
        const imageNumber = 91;
        const imageFinal = [];

        for(let i=1; i < imageNumber; i++){
            imageFinal.push(<Image nr={i} key={i}
                changeDisplay={this.changeDisplay}
            />)
        }
        return (
            <ul className={`images-container ${this.state.displayFlex === false ?'grid' :'flex'}`}>
                {imageFinal}
            </ul>
        )
    }
}
