import React from "react"

export class NewTaskForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        inputText: "", 
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    handleInputChange(e) {
      this.setState({ inputText: e.target.value });
    };

    onSubmit(e) {
      if (this.state.inputText) {
        this.props.addTask(this.state.inputText); 
        this.setState({ inputText: "" }); 
      }
      
      e.preventDefault();
    };

    render() {
        return (
            <form className="new-task-form"
              onSubmit={this.onSubmit}>
                <h1 className="new-task-form__headline">todos</h1>
                <input
                    className="new-task-form__new-todo"
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                    placeholder="What needs to be done?"
                    autoFocus=""
                />
            </form>
        )
    }
}