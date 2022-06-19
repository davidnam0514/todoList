import React, { useState } from 'react';

const TodoInput = ({addTodo}) => {
    // const addTodo = props.addTodo
    // const {addTodo} = props
    const [todo, setTodo] = useState({
        title: '',
        status: 'new'
    })

    const changeHandler = (e) => {
      if (e.target.name === 'title') {
          setTodo({...todo, title: e.target.value})
      } else {
          setTodo({...todo, status: e.target.value})
      }
    }

    return (
        <div>
            <input type="text" name="title" onChange={changeHandler}/>
            <select name="status" onChange={changeHandler}>
                <option value="new">--select--</option>
                <option value="pending">Not Finished</option>
                <option value="working">Working</option>
                <option value="done">Finished</option>
            </select>
            <button onClick={() => addTodo(todo)}>Add</button>
        </div>
    );
};

export default TodoInput;