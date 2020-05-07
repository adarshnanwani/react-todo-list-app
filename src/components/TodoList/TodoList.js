import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedTodoList } from '../../actions/selectedTodoList';
import { deleteTodo, toggleTodo } from '../../actions/todolistitem';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  let todoListId = props.selectedTodoList.id;
  if (props.match) {
    todoListId = props.match.params.todoListId;
  }

  const [selected, setSelected] = useState(todoListId);

  console.log(props);

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
    props.setSelectedTodoList(e.target.value);
  };

  useEffect(() => {
    props.setSelectedTodoList(todoListId);
  }, []);

  return (
    <div className='TodoList'>
      {!props.match && (
        <div className='select-list'>
          <label>Todo List: </label>
          <select value={selected} onChange={handleSelectChange}>
            {props.todolists.map((list) => (
              <option value={list._id} key={list._id}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className='list-container'>
        <h3>Todo List {props.match && `- ${props.selectedTodoList.name}`}</h3>
        <ul>
          {props.selectedTodoList.items &&
            props.selectedTodoList.items.map((item) => (
              <li key={item._id}>
                <TodoListItem
                  item={item}
                  toggleTodo={props.toggleTodo}
                  deleteTodo={props.deleteTodo}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todolists: state.todolists,
  selectedTodoList: state.selectedTodoList,
});

export default connect(mapStateToProps, {
  setSelectedTodoList,
  deleteTodo,
  toggleTodo,
})(TodoList);
