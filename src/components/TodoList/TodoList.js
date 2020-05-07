import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedTodoList } from '../../actions/selectedTodoList';
import './TodoList.css';

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      <div>
        <select>
          {props.todolists.map((list) => (
            <option value={list._id} key={list._id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
      <div className='list-container'>
        <h3>Todo List</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todolists: state.todolists,
  selectedTodoList: state.selectedTodoList,
});

export default connect(mapStateToProps, { setSelectedTodoList })(TodoList);
