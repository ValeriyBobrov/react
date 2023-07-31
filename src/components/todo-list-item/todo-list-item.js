import React from "react";

export default class TodoListItem extends React.Component {

    render() {
        const { description, created, id, onDeleted, onToggleDone, done } = this.props;

        let classNames = '';

        if (done) {
            classNames = 'completed'
        }

        return (
            <li
            key = {id} 
            className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label 
                    onClick={ onToggleDone }>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"
                    onClick={ onDeleted }>
                    </button>
                </div>
            </li>
        )
    }
}
