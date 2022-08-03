import React, {Component} from "react";

class InputTodo extends Component{
    state ={
        fname:"",
        lastName:"",
        title:"",
    };
    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    };
    handleSubmit =e=>{
        e.preventDefault();
        if (this.state.title.trimEnd()){
            this.props.addTodoprops(this.state.title);
        this.setState({
            title:"",
        })
    } else {
        alert("please write item")
    }
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="add todo..." value={this.state.title}
                name="title" onChange = {this.onChange}/>
                <button>Submit</button>
                </form>
        );
    };
};
export default InputTodo;