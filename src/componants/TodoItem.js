import React, {Component} from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} style={{margin:'5px 5px 0 0'}}/>
                    {title}
                    <button type="button" onClick={this.props.deleteTodo.bind(this, id)} style={buttonStyle}>&#10003;</button>
                </p>
            </div>
        );
    }

    getStyle = () => {
        return {
            backgroundColor:'#2d2d2d',
            color:'#e6e6e6',
            borderRadius:'10px',
            margin:'5px',
            padding:'5px 5px 5px 10px',
            textDecoration: this.props.todo.completed? 'line-through' : 'none'
        }
    }
}

const buttonStyle = {
    background: '#66ff66',
    borderRadius:'50%',
    color:'#000',
    border:'none',
    padding:'5px 8px',
    cursor:'pointer',
    float:'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;