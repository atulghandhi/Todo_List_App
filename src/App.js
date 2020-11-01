import './App.css';
import React, {Component} from "react";
import Header from "./componants/Header";
import Todos from "./componants/Todos";
import NewTodo from "./componants/NewTodo";
import {v4 as uuid} from 'uuid'

class App extends Component {
    state = {
        //within the state object, creates an array of objects to hold to-do items.
        todos: [
            {
                id: uuid(),
                title: 'buy some shit',
                completed: false
            },
            {
                id: uuid(),
                title: 'clean some shit',
                completed: false
            },
            {
                id: uuid(),
                title: 'learn some shit',
                completed: false
            },
            {
                id: uuid(),
                title: 'make some shit',
                completed: false
            }
        ]
    }
    render() {
        console.log(this.state.todos);
        //below we take the todos from the App state and pass them to the To-do component as a property
        return (
            <div className="App">
            <Header/>
            <div className="container">
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                <NewTodo newTodo={this.newTodo}/>
            </div>
            </div>
        );
    }

    markComplete = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })})
    }

    deleteTodo = (id) => {
        this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
    }

    newTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title, //title=title no longer required by es6
            completed:false
        }
        this.setState({todos:[...this.state.todos, newTodo]});
    }
}

export default App;