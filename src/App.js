import './App.css';
import React, {Component} from "react";
import Todos from "./componants/Todos";

class App extends Component {
    state = {
        //within the state object, creats an array of objects to hold to-do items.
        todos: [
            {
                id: 1,
                title: 'buy some shit',
                completed: false
            },
            {
                id: 2,
                title: 'clean some shit',
                completed: false
            },
            {
                id: 3,
                title: 'learn some shit',
                completed: false
            },
            {
                id: 4,
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
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;