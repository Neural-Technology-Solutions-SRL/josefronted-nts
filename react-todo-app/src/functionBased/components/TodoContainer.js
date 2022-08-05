import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./ImputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer =()=> {
    /*state = {
        todos: [],
    }*/
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = (id) => {
        setTodos(prevState =>prevState.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                 return todo;
                })
        )
        }

    const delTodo = (id) => {
        setTodos([
                ...todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        );
    };
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos(
            [...todos, newTodo]
            );
    };
    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
        //console.log(updatedTitle, id)
    };
    /*componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.json())
        .then(data => this.setState({todos:data}));
    }*/
    /*componentDidUpdate(prevProps, prevState){
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    };
    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
    }*/
    useEffect(()=>{
        console.log("test run")
        // getting stored items
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos){
            setTodos(loadedTodos)
        }
    },[]);
    useEffect(()=>{
        console.log("test run")
        // getting stored items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },[todos]);
    function getInitialTodos(){
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoprops={addTodoItem} />
                    <TodoList
                        todos={todos}
                        handleChangeprops={handleChange}
                        deleteTodoprops={delTodo}
                        setUpdate={setUpdate} />
                </div>
            </div>
        )
    }

export default TodoContainer
//check using react hooks