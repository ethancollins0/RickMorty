import React, { Component } from 'react'
import Character from './Character'

export default class CharactersContainer extends Component {

    renderChars = () => 
        this.props.characters
            ? this.props.characters.map(character => {
                return <Character character={character} />
            })
            : null
    

    render(){
        return(
            <div>
                {this.renderChars()}
            </div>
        )
    }
}