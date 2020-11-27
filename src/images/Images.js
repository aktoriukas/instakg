import React, { Component } from 'react';
import Image from './Image';

export default class Images extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayFlex: false,
             currentImage: 0,
             imageNumber: 91

        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }
    nextImage () {
        const { currentImage, imageNumber} = this.state;

        let image = parseInt(currentImage) + 1;
        if (image > imageNumber - 1) { image = 1}
        this.setState({
            currentImage: image
        })
    }
    prevImage () {
        const { currentImage, imageNumber} = this.state;

        let image = parseInt(currentImage) - 1;
        if (image < 1) { image = imageNumber -1}
        this.setState({
            currentImage: image
        })
    }
    changeDisplay(e) {
        console.log(e.target.id);
        this.setState({
            displayFlex: !this.state.displayFlex,
            currentImage: e.target.id
        })
    }
    // handlerEvent (e) {
    //     if(e.key == 'Escape') {this.changeDisplay()}
    // }
    
    render() {
        const {displayFlex, currentImage, imageNumber} = this.state;
        const imageFinal = [];
        let displayFormat = '';

        for(let i=1; i < imageNumber; i++){
            imageFinal.push(<Image nr={i} key={i}
                changeDisplay={this.changeDisplay}
                display={!displayFlex || currentImage == i  ? {display:'inherit'} : {display:'none'}}
                nextImage={this.nextImage}
                prevImage={this.prevImage}
            />)
        }
        if ( displayFlex === false) {
            displayFormat = `grid`;
        } else {
            displayFormat = `flex ${currentImage}`;
        }

        return (
            <ul className={`images-container ${displayFormat}`}
                onKeyDown={this.handlerEvent}
                tabIndex="0" 
            >
                {imageFinal}
            </ul>
        )
    }
}
