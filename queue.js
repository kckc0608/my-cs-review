const btn_queue_push = document.querySelector('.section_queue').querySelector('.push');
const btn_queue_pop = document.querySelector('.section_queue').querySelector('.pop');
const queue_container = document.querySelector('.queue');

btn_queue_push.addEventListener("click", (e) => {
    const new_element = document.createElement("div");
    new_element.setAttribute("class", "box");
    new_element.appendChild(document.createTextNode(queue_container.childElementCount+1));
    queue_container.appendChild(new_element);
    queue_container.scrollTo(queue_container.scrollWidth, 0);
});

btn_queue_pop.addEventListener("click", () => {
    queue_container.removeChild(queue_container.lastChild);
});

