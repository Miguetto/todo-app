import { useTodos } from './hooks/useTodos';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo, handleEditTodo } = useTodos();

    return (
        <>
            <div className=" d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg font-weight-normal">
                                <i className="fa fa-tasks"></i>&nbsp;Tareas pendientes: {pendingTodosCount}
                            </div>
                        </div>
                        <div className="scroll-area-sm">
                            <perfect-scrollbar className="ps-show-limits">
                                <div className="ps ps--active-y sta">
                                    <div className="ps-content">
                                        <TodoList
                                            todos={todos}
                                            onDeleteTodo={handleDeleteTodo}
                                            onToggleTodo={handleToggleTodo}
                                            onEditTodo={handleEditTodo}
                                        />
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                        <div className="d-block text-right card-footer">
                            <TodoAdd onNewTodo={handleNewTodo} />
                        </div>
                    </div>             
                </div>
            </div>
        </>
    )
}
