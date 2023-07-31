import React from "react";

import FooterFilter from "../footer-filter";

export default class Footer extends React.Component {

    render() {

        return (
            <footer className="footer">
                <span className="todo-count">3 items left</span>
                <FooterFilter />
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}
