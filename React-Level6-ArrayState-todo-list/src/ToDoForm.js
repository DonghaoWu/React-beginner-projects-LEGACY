import React from 'react';

const ToDoForm = props => {
  const {
    deleteTask,
    editTask,
    pressEditArr,
    handleEdit,
    editingTask,
    isEditing,
    el,
    index
  } = props;
  return (
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
  );
};

export default ToDoForm;
