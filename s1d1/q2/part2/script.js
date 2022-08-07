const dragItems = document.querySelectorAll('.items');
const container = document.getElementById('container');

dragItems.forEach(i => {
    i.addEventListener('dragstart', () => {
        i.classList.add('drag')
    })

    i.addEventListener('dragend', () => {
        i.classList.remove('drag')
    })
})

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const after = afterElem(container, e.clientY);
    const drag = document.querySelector('.drag');
    if(after === null){
        container.append(drag)
    }else{
        container.insertBefore(drag, after);
    }
})

const afterElem = (c,y) => {
    const drag = [...c.querySelectorAll('.items:not(.drag)')];
    return drag.reduce((near, el) => {
        const box = el.getBoundingClientRect();
        const offset = y - box.top - box.height/2;
        if(offset < 0 && offset > near.offset) {
            return {offset : offset, elem : el}
        }else {
            return near;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).elem;
}



















// const items = document.querySelectorAll('.items');
// const container = document.getElementById('container');

// items.forEach(i => {
//     i.addEventListener('dragstart', () => {
//         i.classList.add('dragging');
//     })

//     i.addEventListener('dragend', () => {
//         i.classList.remove('dragging');
//     })

//     i.addEventListener('dragover', () => {
//         const draggable = document.querySelector('.dragging');
//         i.append(draggable);
//     })
// })