import React from "react"
import  ReactDOM  from "react-dom"

import TodoContainer from "./components/TodoContainer"
import TodoList from "./components/TodoList"
ReactDOM.render(
<React.StrictMode><TodoContainer/></React.StrictMode>, document.getElementById("root"));
ReactDOM.render(
    <TodoList/>, document.getElementById("root.1")
)