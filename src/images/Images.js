import React, { Component } from 'react';
import Image from './Image';

export default class Images extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayFlex: false,
             currentImage: ''

        }
        this.changeDisplay = this.changeDisplay.bind(this)
    }
    changeDisplay(e) {
        console.log(e.target.id);
        this.setState({
            displayFlex: !this.state.displayFlex,
            currentImage: e.target.id
        })
    }
    
    render() {
        const {displayFlex, currentImage} = this.state;
        const imageNumber = 91;
        const imageFinal = [];
        let displayFormat = '';

        for(let i=1; i < imageNumber; i++){
            imageFinal.push(<Image nr={i} key={i}
                changeDisplay={this.changeDisplay}
                display={!displayFlex || currentImage == i  ? {display:'inherit'} : {display:'none'}}
            />)
        }
        if ( displayFlex === false) {
            displayFormat = `grid`;
        } else {
            displayFormat = `flex ${currentImage}`;
        }

        return (
            <ul className={`images-container ${displayFormat}`}>
                {imageFinal}
            </ul>
        )
    }
}
