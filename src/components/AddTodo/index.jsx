import { Component } from "react";
import "./style.css"

class AddTodo extends Component {
    constructor(props){
        super (props);
    }

    render() {
        return (
        <div>
        <form className="add-todolist">
            <input type="text" placeholder="Add todo..."/>
            <button type="submit">Submit</button>
        </form>
    </div>
        ) 
    }
}  

export default AddTodo;