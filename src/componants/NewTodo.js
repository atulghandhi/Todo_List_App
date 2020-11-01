import React, {Component} from 'react';
import PropTypes from "prop-types";
import Todos from "./Todos";

class NewTodo extends Component {
    state = {
        title: ''
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    style={inputFieldStyle}
                    placeholder="Add Todo..."
                    className='input'
                    value={this.state.title}
                    onChange={this.onTextInput}
                />
                <input
                    type="submit"
                    value="Submit"
                    style={buttonStyle}
                    className='input'
                />
            </form>
        );
    }

    onTextInput = (event) => this.setState({title: event.target.value});

    onSubmit = (event) => {
        event.preventDefault();
        this.props.newTodo(this.state.title);
        this.setState({title: ''})
    }
}

const inputFieldStyle = {
    margin:'5px 1px 5px 5px',
    borderTopLeftRadius:'10px',
    borderBottomLeftRadius:'10px',
    flex:'10'
}

const buttonStyle = {
    margin:'5px 5px 5px 1px',
    borderTopRightRadius:'10px',
    borderBottomRightRadius:'10px',
    textAlign:'center',
    fontWeight:'900',
    fontSize:'16px',
    flex:'1'
}

//prop types in NewTodo file
NewTodo.propTypes = {
    newTodo: PropTypes.func.isRequired,
}

export default NewTodo;