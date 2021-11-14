const elementsById = {};
const elements = [];

const init = () => {
    for (let i = 1; i <= 300; i++) {
        const el = {id: i, name: `Элемент ${i}`};
        elementsById[i] = el;
        elements.push(el)
    }
}

init();

const getElementById = (id) => {
    return elementsById[id];
}

const getElements = (filter, searchQuery) => {
    //filter
    let start = 0;
    let end = 299;
    if (filter?.cond === 'more') {
        start = filter.value;
    }
    let elems = elements.slice(start, end);
    //search
    elems = elems.filter(e => e.name.match(searchQuery))

    return elems;
}

export const data = {getElements, getElementById}