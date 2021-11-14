import s from "./widget-block.module.css";
import {useMemo, useState} from "react";
import {data} from "../../data/data";
import {SelectedElementsBlock} from "../../common/SelectedElementsBlock/SelectedElementsBlock";
import {Button} from "../../common/Button/Button";
import {ElementsList} from "./ElementsList/ElementsList";

const filters = [
    {id: 1, value: 0, cond: "", title: "Без фильтра"},
    {id: 2, value: 10, cond: "more", title: "Номер больше > 10"},
    {id: 3, value: 100, cond: "more", title: "Номер больше > 100"},
    {id: 4, value: 200, cond: "more", title: "Номер больше > 200"},
];

export const filtersById = {
    1: {id: 1, value: 0, cond: "", title: "Без фильтра"},
    2: {id: 2, value: 10, cond: "more", title: "Номер больше > 10"},
    3: {id: 3, value: 100, cond: "more", title: "Номер больше > 100"},
    4: {id: 4, value: 200, cond: "more", title: "Номер больше > 200"},
};

export const WidgetBlock = ({hide, updateElements, se}) => {
    const [selectedElements, setSelectedElements] = useState(se);
    const [filterId, setFilterId] = useState(filters[0]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (e) => {
        const value = e.currentTarget.value;
        setSearchQuery(value);
    }

    const handleFilterSelect = (e) => {
        setFilterId(+e.target.value);
    }

    const handleDeleteElement = (id) => {
        let newSelectedElements = [...selectedElements].filter(e => e.id !== id);
        setSelectedElements(newSelectedElements);
    }

    const save = () => {
        updateElements(selectedElements);
        hide();
    }

    const elements = useMemo(() => data.getElements(filtersById[filterId], searchQuery), [filterId, searchQuery]);

    return (
        <div className={s.block}>
            <div className={s.header}>
                <span>Диалог выбора элементов</span>
                <button className={s.close} onClick={hide}>X</button>
            </div>
            <div className={s.filters}>
                <input className={s.search} type="text"
                       placeholder={"Поиск"}
                       value={searchQuery}
                       onChange={handleSearchInput}/>
                <select className={s.filter} value={filterId} onChange={handleFilterSelect}>
                    {filters.map(f => <option key={f.id} id={f.id} value={f.id}>{f.title}</option>)}
                </select>
            </div>
            <ElementsList elements={elements} selectedElements={selectedElements}
                          setSelectedElements={setSelectedElements}/>
            {selectedElements.length
                ? <div className={s.selectedElements}>
                    Выбранные элементы на данный момент:
                    <SelectedElementsBlock elements={selectedElements} deleteElement={handleDeleteElement}/>
                </div>
                : <div className={s.selectedElements}>Не выбрано ни одного элемента</div>}
            <div className={s.controls}>
                <Button disabled={false} onClick={save} text={"Сохранить"}/>
                <Button disabled={false} onClick={hide} text={"Отменить"}/>
            </div>
        </div>
    )
}
