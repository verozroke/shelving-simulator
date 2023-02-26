export default function clearList() {
    const parentShelfs = document.querySelector('.tsukue__desk')
    if(parentShelfs.querySelector('.tsukue__item')) {
        const nodeListChilds = parentShelfs.querySelectorAll('.tsukue__item')
        const parentListNode = document.querySelector(".tsukue__items");
        nodeListChilds.forEach((el) => {
            parentListNode.appendChild(el)  
        })          
    }
}