import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedTodoList } from '../../actions/selectedTodoList';
import { deleteTodo, toggleTodo } from '../../actions/todolistitem';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  const [selected, setSelected] = useState(props.selectedTodoList.id);

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
    props.setSelectedTodoList(e.target.value);
  };

  return (
    <div className='TodoList'>
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
      <div className='list-container'>
        <h3>Todo List</h3>
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
