import React from "react";
import s from "./header.module.css";
import {SelectedElementsBlock} from "../../common/SelectedElementsBlock/SelectedElementsBlock";
import {Button} from "../../common/Button/Button";

export const HeaderBlock = ({selectedElements, deleteElement, show, isShow}) => {
    return (
        <>
            <TitleBlock elements={selectedElements} deleteElement={deleteElement}/>
            <div className={s.controls}>
                <Button disabled={isShow} onClick={show} text={"Изменить мой выбор"} />
            </div>
        </>
    )
}

const TitleBlock = ({elements, deleteElement}) => {

    let info = "На данный момент у вас ";
    switch (elements.length) {
        case 0:
            info += "не выбрано ни одного элемента";
            break;
        case 1:
            info += `выбран ${elements.length} элемент`;
            break;
        default:
            info += `выбрано ${elements.length} элемента`;
            break;
    }

    return (
        <div className={s.content}>
            <h4>Выбор элементов</h4>
            <span>{info}</span>
            <SelectedElementsBlock elements={elements} deleteElement={deleteElement}/>
        </div>
    )
}