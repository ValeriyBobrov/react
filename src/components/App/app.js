import React from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import Footer from "../footer";

export default class App extends React.Component {

    maxId = 100;

    state = {
      todoData: [
        this.createTodoItem('Completed task'),
        this.createTodoItem('Editing task'),
        this.createTodoItem('Active task'),
      ]
    }

    createTodoItem(text) {
        return {
            description: text,
            created: 'created 5 minutes ago',
            id: this.maxId++,
            done: false,
        }
    }

    deletedItem = (id) => {
        this.setState((prevState) => ({
            todoData: prevState.todoData.filter((item) => item.id !== id),
        }));
    }

    onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        const updatedTodoData = JSON.parse(JSON.stringify(todoData));
    
        updatedTodoData.forEach((todoItem) => {
          if (todoItem.id === id) {
            todoItem.done = !todoItem.done;
          }
        });

        console.log(id, updatedTodoData)
    
        return {
          todoData: updatedTodoData,
        };
      });
    };
  
    render() {
  
      return (
        <section className="todoapp">
          <AppHeader />
          <TodoList 
            todos = { this.state.todoData } 
            onDeleted= {this.deletedItem}
            onToggleDone= {this.onToggleDone}/>
          <Footer />
        </section>
      )
    }
  }