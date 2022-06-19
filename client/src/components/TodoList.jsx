import React from 'react';

const TodoList = ({todoList}) => {
    
    return (
        <div>
           <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>    
                    </tr>    
                </thead>   
                <tbody>
                    {
                        todoList.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.title}</td>
                                    <td>{item.status}</td>    
                                </tr> 
                            )
                        })
                    }
                </tbody>
            </table> 
        </div>
    );
};

export default TodoList;