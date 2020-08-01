import React, { Component } from 'react';
import TaskList from './TaskList';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      pressEditArr: [],
      editingTask: '',
      isEditing:false,
    };
  }

  addTask = e => {
    e.preventDefault();
    if (e.target.taskName.value) {
      this.setState({
        tasks: [...this.state.tasks, e.target.taskName.value],
        pressEditArr: new Array(this.state.tasks.length + 1).fill(false)
      });
      e.target.taskName.value = '';
    }
  };

  deleteTask = id => {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, id),
        ...this.state.tasks.slice(id + 1)
      ],
      pressEditArr: [
        ...this.state.pressEditArr.slice(0, id),
        ...this.state.pressEditArr.slice(id + 1)
      ]
    });
  };

  handleEdit = e => {
    this.setState({
      editingTask: e.target.value
    });
  };

  editTask = id => {
    if (this.state.pressEditArr[id]) {
      this.setState({
        tasks: [
          ...this.state.tasks.slice(0, id),
          this.state.editingTask,
          ...this.state.tasks.slice(id + 1)
        ],
        editingTask: '',
        isEditing:false,
      });
    } else if (!this.state.pressEditArr[id]) {
      this.setState({
        editingTask: this.state.tasks[id],
        isEditing:true,
      });
    }
    this.setState({
      pressEditArr: [
        ...this.state.pressEditArr.slice(0, id),
        !this.state.pressEditArr[id],
        ...this.state.pressEditArr.slice(id + 1)
      ]
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addTask} className="main-form">
          <label htmlFor="taskName">Task Name:</label>
          <input name="taskName" type="text" placeholder="Add todo here!" />
          <button type="submit">Add Task</button>
        </form>
        <TaskList
          tasks={this.state.tasks}
          pressEditArr={this.state.pressEditArr}
          editingTask={this.state.editingTask}
          isEditing = {this.state.isEditing}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          handleEdit={this.handleEdit}
          className="tasklist"
        />
      </div>
    );
  }
}

export default ToDoList;
