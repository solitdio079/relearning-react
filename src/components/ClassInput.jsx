import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      editTodo: "",
      editInput:"",
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeEditTodo = this.changeEditTodo.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }
  handleEditInputChange(e) {
    this.setState((state) => ({
      ...state,
      editInput: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
      editTodo: state.editTodo,
      editInput: state.editInput,
    }));
  }
  handleEdit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.map(item => {
        if(item === state.editTodo) return state.editInput
        return item
      }),
      inputVal: state.inputVal,
      editTodo: "",
      editInput: ""
    }));
  }

  handleDelete(todo) {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item !== todo),
      inputVal: state.inputVal,
      editTodo: state.editTodo,
    }));
  }
  changeEditTodo(todo) {
    this.setState((state) => ({
      ...state,
      editTodo: todo,
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            if(todo === this.state.editTodo) return (<li key={todo} style={{ margin: "20px 0" }}> <form onSubmit={this.handleEdit}> <input name="edit-task" type="text"  onChange={this.handleEditInputChange} defaultValue={this.state.editTodo} /> <button>Resubmit</button> </form> </li>) 
             return (
              <li key={todo} style={{ margin: "20px 0" }}>
                {todo}{" "}
                <button
                  onClick={() => {
                    this.handleDelete(todo);
                  }}
                >
                  X
                </button>{" "}
                <button onClick={()=> {this.changeEditTodo(todo)}} >Edit</button>{" "}
              </li>
            );
          })}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p> {this.props.todos.length} Total </p>
      </>
    );
  }
}
export default ClassInput;
