import React, { Component } from 'react'

export default class SearchForm extends Component {

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.input)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='input' placeholder='search characters...' value={this.state.input} onChange={this.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        )
    }


}