import React, {Component} from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        //todos props sent to it from app.js
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} markComplete={this.props.markComplete} deleteTodo = {this.props.deleteTodo}/>
        ));
    }
}

//prop types in todos file
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
