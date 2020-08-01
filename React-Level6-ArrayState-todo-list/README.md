# ToDo List

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## `Section 1: Add an add functionality.`

```jsx
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
```

`Note:`

<ol>

- Let's say tasks is an array, every time when you click the add button, invoke the funciton <strong>`addTask`</strong>
- In the addTask function, first check the input, if the input is not an empty string, we add it to tasks array.
- So basicly add action is a pushing action.

- At the same time, create an new array, with the length is <strong>`this.state.tasks.length + 1`</strong>, and each element value is <strong>`false`</strong>. This array is for editing.

- We should try to make the input to be a control component, which means the value is from the state, and the onChange method is handleing the state. In this case, we just make it easier, accessing the value by <strong>`event`</strong>.

</ol>

## `Section 2: Add an delete functionality.`

```jsx
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
```

`Note:`

<ol>

- Delete and Add are similar, in the delete action, we can delete the value in tasks array according to the index.

- At the same time, make the length of pressEditArr decrease by one.
</ol>

## `Section 3: Add an edit functionality.`

```jsx
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
      isEditing: false
    });
  } else if (!this.state.pressEditArr[id]) {
    this.setState({
      editingTask: this.state.tasks[id],
      isEditing: true
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
```

`Note:`

<ol>

- When you click on the edit button, change the isEditing value to true, so that ToDoForm has two status, one is editing , which means only the editing item has available buttons. Another is not editing, all items have avaible buttons.

- At the same time when you click on edit button, we will change the value of <strong>`this.state.editingTask`</strong>, fill it with the index value of <strong>`this.state.tasks[id]`</strong>, then in the input field, set <strong>`value = {edtingTask}`</strong>, so we can see the value in the input field.

- Then we add a onChange method in the input field to make the input field to be controled.

- After we finished editing, we change the value in the index of <strong>`this.state.tasks`</strong>, fill it with <strong>`this.state.editingTask`</strong>, after we change it, we set <strong>`this.state.editingTask`</strong> value to '', to ## protect the privacy.
</ol>

## `Important code in ToDoForm.js`

```jsx
<div className="one-task">
  <li>
    {isEditing ? (
      pressEditArr[index] ? (
        <div>
          <input type="text" value={editingTask} onChange={handleEdit} />
          <button type="submit" onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button type="submit" onClick={() => editTask(index)}>
            Done
          </button>
        </div>
      ) : (
        <div>
          {el}
          <button type="submit" disabled>
            Delete
          </button>
          <button type="submit" disabled>
            Edit
          </button>
        </div>
      )
    ) : (
      <div>
        {el}
        <button type="submit" onClick={() => deleteTask(index)}>
          Delete
        </button>
        <button type="submit" onClick={() => editTask(index)}>
          Edit
        </button>
      </div>
    )}
  </li>
</div>
```

### `Side Note:`

#### `The final code I make the edit functionality to be editing only one item in one time, so that we can easier to handle the value in the state. If you editing multiple items in one time, it is complicated to handle the multiple actions and values.`
