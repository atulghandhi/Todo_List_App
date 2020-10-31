import React, {Component} from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        //todos props sent to it from app.js
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} />
        ));
    }
}

//prop types in todos file
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
