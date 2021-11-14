import React from "react";
import s from "./article.module.css";

export const Article = () => {

    return (
        <article className={s.article}>
            <h2 className={s.h2}>Почему не рассматриваются заявки с жалобами на нарушение Правил игры?</h2>
            <div className={s.content}>
                <p className={s.infoStart}>
                    После введения функционала «Пожаловаться» не рассматриваются заявки, созданные в Центр поддержки
                    пользователей о нарушении Правил игры по следующим пунктам:
                </p>
                <ol className={s.rulesList}>
                    <li className={s.rule}>
                        <h4 className={s.h4}>«Оскорбления и провокации»</h4>
                        <div className={s.ruleContent}>
                            В данный пункт входит:
                            <ul className={s.subList}>
                                <li className={s.subRule}>
                                    использование ненормативной лексики и оскорбление собеседников, применение
                                    унизительных
                                    кличек и
                                    прозвищ
                                    по расовому, национальному, религиозному либо половому признаку, а также
                                    провоцирование
                                    собеседника
                                    к их
                                    использованию;
                                </li>
                                <li className={s.subRule}>
                                    клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах
                                    или
                                    Пользователях;
                                </li>
                                <li className={s.subRule}>
                                    угрозы реальной расправы в отношенииили представителей Администрации Проекта. Все
                                    виды
                                    соглашения.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={s.rule}>
                        <h4 className={s.h4}>«Неинформативные сообщения»</h4>
                        <div className={s.ruleContent}>
                            В данный пункт входит:
                            <ul className={s.subList}>
                                <li className={s.subRule}>
                                    размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение
                                    Пользователей от темы
                                    беседы (флуд);
                                </li>
                                <li className={s.subRule}>
                                    все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.
                                </li>
                            </ul>
                        </div>
                        <p className={s.infoCenter}>
                            Также не рассматриваются следующие заявки, созданные в Центр поддержки пользователей о
                            нарушении Правил игры:
                        </p>
                    </li>
                    <li className={s.rule}><h4 className={s.h4}>«Раскрытие позиций союзников»</h4></li>
                    <li className={s.rule}><h4 className={s.h4}>«Выталкивание союзника»</h4></li>
                    <li className={s.rule}><h4 className={s.h4}>«Неспортивное поведение»</h4></li>
                    <li className={s.rule}><h4 className={s.h4}>«Повреждение союзников»</h4></li>
                </ol>
            </div>
        </article>
    )
}