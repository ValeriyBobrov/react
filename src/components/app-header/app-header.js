import React from "react";

const AppHeader = () => {
    return(
        <header className="header">
            <h1>todos</h1>
            <input 
                className="new-todo"
                placeholder="What needs to be done?" 
            />
        </header>
    )
}

export default AppHeader;