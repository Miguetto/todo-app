import { useForm } from "../hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: '',
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1) return;

        const newTodo = {
            done: false,
            id: new Date().getTime(),
            description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    

    return (
        <form className="form" onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button
                type="text"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
