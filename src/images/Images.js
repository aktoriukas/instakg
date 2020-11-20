import React, { Component } from 'react';
import Image from './Image';

export default class Images extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             displayType: ['images-container grid']
        }
    }
    
    
    render() {
        const imageNumber = 91;
        const imageFinal = [];
        for(let i=1; i < imageNumber; i++){
            imageFinal.push(<Image nr={i} key={i}/>)
        }
        return (
            <ul className={this.state.displayType}>
                {imageFinal}
            </ul>
        )
    }
}
