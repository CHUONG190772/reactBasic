import React from "react";

class ListTodo extends React.Component {
  render() {
    return (
      <>
        <div className="list-todo-container">
          <div className="add-todo">
            <input type="text" />
            <button type="button">Add</button>
          </div>
          <div className="list-todo-content"></div>
        </div>
      </>
    );
  }
}
export default ListTodo;
