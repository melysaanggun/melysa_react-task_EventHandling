const List = (props) => {

    const onChange = (id) => {
        return (e) => {
            props.onChecked(id, e.target.checked)
        }
    }

    return ( 
        <div>
            {props.list.map(todo => {
                return <ul key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        <input type="checkbox" checked={todo.completed} 
                        onChange={onChange(todo.id)}  />
                        {todo.title}

                    <button onClick={() => props.hapus(todo.id)} >Delete</button>
                    </ul>
            })}
        </div>
     );
}
 
export default List;