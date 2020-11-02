import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import About from "./componants/pages/About";
import React, {Component} from "react";
import Header from "./componants/Header";
import Todos from "./componants/Todos";
import NewTodo from "./componants/NewTodo";
// import {v4 as uuid} from 'uuid' //used to generate unique id's in v1.0.0
import Axios from "axios";

class App extends Component {
    state = {
        //within the state object, creates an array of objects to hold to-do items.
        todos: []
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(resolve => this.setState({todos: resolve.data}))
    }

    render() {
        console.log(this.state.todos);
        //below we take the todos from the App state and pass them to the To-do component as a property
        return (
            <Router>
                <div className="App">

                    <Header/>

                    <Route exact path='/' render={props => (
                        <div className="container">
                            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                            <NewTodo newTodo={this.newTodo}/>
                        </div>
                    )} />

                    <Route path='/about' component={About} />

                </div>
            </Router>
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
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(resolve => this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}))
    }

    newTodo = (title) => {
        //making http post request to server, passing to-do object as argument.
        Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false}) //'variableName=ValueWithSameName' no longer required by es6, so instead of 'title=title', we can just say title
            .then(resolve => this.setState({todos:[...this.state.todos, resolve.data]}))
    }
}

export default App;