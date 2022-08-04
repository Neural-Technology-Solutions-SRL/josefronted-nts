import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo =>(
                    <TodoItem key={todo.id} 
                    todo={todo}
                    handleChangeprops={this.props.handleChangeprops}
                    deleteTodoprops = {this.props.deleteTodoprops}
                    setUpdate= {this.props.setUpdate}/>
                ))}
            </ul>
        )
    }
};
export default TodoList