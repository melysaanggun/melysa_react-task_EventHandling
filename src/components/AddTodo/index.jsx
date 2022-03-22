import { Component } from "react";
import "./style.css"

class AddTodo extends Component {
    constructor(props){
        super (props);

        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.setState({value: e.target.value})
    }
    
    onClick() {
        this.props.simpan(this.state.value)
        this.setState({value: ''})
    }

    render () {
        return (
        <>
        <div className="form-input">
            <input 
            type="text" 
            placeholder="Add todo..." 
            value={this.state.value} 
            onChange={(e) => this.onChange(e)} />
            
            <button type="submit" onClick={this.onClick.bind(this)} >Submit</button>
        </div>
        <div>
            
        </div>
        </>
        ) 
    };
}  

export default AddTodo;