

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item">
      <div className="todo-indicator bg-warning"></div>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-2">
            <div className="custom-checkbox custom-control">
              <div className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}>
                <div className="widget-content-left">
                  <div className="widget-heading">{ todo.description }</div> 
                  <div className="widget-subheading"><i>{ todo.done }</i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-content-right">
              <button 
                className={`border-0 btn-transition btn btn-outline-success ${ (todo.done) ? 'disabled' : '' }`}
                onClick={ () => onToggleTodo( todo.id )}
              >
                          <i className="fa fa-check">Terminada</i>
              </button>
              <button 
                className="border-0 btn-transition btn btn-outline-danger"
                onClick={ () => onDeleteTodo( todo.id ) }
              >Borrar<i className="fa fa-trash"></i>
              </button>
            </div>
        </div>
      </div>
        
    </li>
  )
}
