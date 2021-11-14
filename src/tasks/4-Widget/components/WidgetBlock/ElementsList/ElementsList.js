import {data} from "../../../data/data";
import s from "./elements-list.module.css";
import {Checkbox} from "../../../common/CheckBox/Checkbox";


export const ElementsList = ({elements, selectedElements, setSelectedElements}) => {
    const seById = {};
    selectedElements.forEach(se => {
        seById[se.id] = se;
    });

    const handlerCheckBox = (e) => {
        const eId = +e.currentTarget.id;
        const element = data.getElementById(eId);
        const checked = e.currentTarget.checked;
        let newSelectedElements = [...selectedElements];
        if (checked) {
            newSelectedElements.push(element);
        } else {
            newSelectedElements = newSelectedElements.filter(e => e.id !== eId);
        }
        setSelectedElements(newSelectedElements);
    }

    return (
        <div className={s.elements}>
            {!elements.length && <div className={s.message}>Ничего не найдено</div>}
            {elements.map(e => <Checkbox key={e.id} id={e.id}
                                         checked={!!seById[e.id]}
                                         disabled={!seById[e.id] && selectedElements.length >= 3}
                                         label={e.name}
                                         onchange={handlerCheckBox}/>)}
        </div>
    )
}