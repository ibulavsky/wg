import React, {useMemo, useState} from "react";
import s from "./list.module.css";
import {GamesMobileList} from "./GamesLists/GamesMobileList";
import {GamesList} from "./GamesLists/GamesList";

export const Games = [
    {id: 1, title: "World Of Tanks"},
    {id: 2, title: "World Of Warplanes"},
    {id: 3, title: "World Of Warships"},
];

export const List = () => {
    const [selectedId, setSelectedId] = useState(2);
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={s.listWrapper}>
            <div className={s.container}>
                <SelectedGame selectedId={selectedId} setOpen={setOpen} isOpen={isOpen}/>
                <GamesMobileList selectedId={selectedId} setSelectedId={setSelectedId}
                                 isOpen={isOpen} setOpen={setOpen}/>
                <GamesList selectedId={selectedId} setSelectedId={setSelectedId}/>
            </div>
        </div>
    )
}

const SelectedGame = ({selectedId, isOpen, setOpen}) => {
    const game = useMemo(() => Games.find(g => g.id === selectedId), [selectedId]);
    const show = () => {
        setOpen(true)
    }

    return (
        <div className={`${s.selected} ${isOpen && s.none}`} onMouseEnter={show}>
            <span>{game.title}</span>
        </div>
    )
}




