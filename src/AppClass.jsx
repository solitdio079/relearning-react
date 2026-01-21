import { Component } from "react";

class classInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
        inputVal: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState((state) => ({
        ...state,
        inputVal: e.target.value
    }))
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState(state => ({
        todos: state.todos.concat(state.inputVal),
        inputVal: ""
    }))
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter Todos */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" value={this.state.inputVal} onChange={this.handleInputChange} id="task-entry" name="task-entry" />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the Todos, displayed */}
        <ul></ul>
      </section>
    );
  }
}

export default classInput;
