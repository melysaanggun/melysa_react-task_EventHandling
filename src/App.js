import './App.css';
import { Component } from 'react';
import AddTodo from "./components/AddTodo";
import List from './components/List';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: 
      [
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false 
        }
      ]
    }
  }

  simpan = (value) => {
    const baru = [...this.state.todo, 
      {id: (new Date()).getTime(), title: value, completed: false,  }]
    this.setState({todo: baru})
  }

  selesai = (id, checked) => {
    const baru = this.state.todo.map(x => {
      if (id === x.id) return {...x, completed: checked}
      return x
    })
    this.setState({todo: baru})
  }

  hapus = (id) => {
    const baru = this.state.todo.filter(x => x.id !== id )
    this.setState({todo: baru})
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>todos</h1>
          <AddTodo simpan={this.simpan}/>
          <List 
          list={this.state.todo} 
          onChecked={this.selesai}
          hapus={this.hapus} />
        </div>
      </div>
    )
  }
}