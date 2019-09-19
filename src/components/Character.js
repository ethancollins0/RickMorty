import React from 'react'

const Character = (props) => {
    console.log(props)

    function handleClick(url){
        window.open(url)
    }

    function handleStatus(event){
        event.target.textContent == 'Status: Alive'
            ? event.target.textContent = 'Status: Dead'
            : event.target.textContent = 'Status: Alive'
    }

    return (
        <div>
            <img src={props.character.image} onClick={() => handleClick(props.character.url)}></img>
            <h3>Name: {props.character.name}</h3>
            <p>Gender: {props.character.gender}</p>
            <p>Species: {props.character.species}</p>
            {props.character.status != 'unknown' ? <p onClick={(event) => handleStatus(event)}>Status: {props.character.status}</p> : null}
            {props.character.origin.name != 'unknown' ? <p>Origin: {props.character.origin.name}</p> : null}
            
        </div>
    )
}

export default Character