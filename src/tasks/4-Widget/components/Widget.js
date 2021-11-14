import React, {useState} from "react";
import s from "./widget.module.css";
import {HeaderBlock} from "./Header/HeaderBlock";
import {WidgetBlock} from "./WidgetBlock/WidgetBlock";
import {data} from "../data/data";

export const Widget = () => {

    const [selectedElements, setSelectedElements] = useState([data.getElementById(1), data.getElementById(2)]);
    const [isShow, setShow] = useState(false);

    const deleteElement = (id) => {
        const elIndex = selectedElements.findIndex(el => el.id === id);
        if (elIndex >= 0) {
            const newElements = [...selectedElements];
            newElements.splice(elIndex, 1);
            setSelectedElements(newElements);
            return;
        }
        console.log(`error: element with id=${id} not found.`);
    }
    const updateElements = (items) => {
        setSelectedElements(items);
    }

    const show = () => setShow(true);
    const hide = () => setShow(false);

    return (
        <div className={s.widget}>
            <HeaderBlock selectedElements={selectedElements} deleteElement={deleteElement} show={show} isShow={isShow}/>
            {isShow && <WidgetBlock hide={hide} updateElements={updateElements} se={selectedElements}/>}
        </div>
    )
}

