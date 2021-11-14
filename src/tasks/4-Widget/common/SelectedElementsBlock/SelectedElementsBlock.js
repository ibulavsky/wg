import s from "./selected-elements-block.module.css";

export const SelectedElementsBlock = ({elements, deleteElement}) => {
    return (
        <div className={s.elements}>
            {elements.map(e => <SelectedElement key={e.id} id={e.id} element={e}
                                                deleteElement={deleteElement}/>)}
        </div>)
}

const SelectedElement = ({id, element, deleteElement}) => {

    const deleteHandler = () => deleteElement(id);

    return (
        <div className={s.element}>
            <span>{element.name}</span>
            <button onClick={deleteHandler}>X</button>
        </div>
    )
}