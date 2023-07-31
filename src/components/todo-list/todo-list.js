import React from "react";

import TodoListItem from "../todo-list-item";

export default class TodoList extends React.Component {

    render() {
        const { todos, onDeleted, onToggleDone } = this.props;

        const elements = todos.map((item) => {
            return (
                <TodoListItem
                    description = {item.description}
                    created = {item.created}
                    key = {item.id}
                    onDeleted = {() => onDeleted(item.id)}
                    onToggleDone = {() => onToggleDone(item.id)}
                />
            )
        })
    
        return (
            <section className="main">
                <ul className="todo-list">
                    { elements }
                </ul>
            </section>
        )
    }
}
