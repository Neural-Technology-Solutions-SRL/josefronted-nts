import React, { useState } from "react"
import {FaPlusSquare} from "react-icons/fa"


const InputTodo = props => {
  const [inputText, setInputText] = useState({ title: "", })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoprops(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusSquare
      style={{ color: "green", fontSize: "20px", marginTop: "4px" }}
      />
      </button>
    </form>
  )
}

export default InputTodo