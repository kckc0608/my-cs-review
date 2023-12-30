const push_button = document.querySelector('.section_stack').querySelector('.push');
const pop_button = document.querySelector('.section_stack').querySelector('.pop');
const stack_container = document.querySelector('.stack');

push_button.addEventListener("click", (e) => {
    const new_element = document.createElement("div");
    new_element.setAttribute("class", "box");
    new_element.appendChild(document.createTextNode(stack_container.childElementCount+1));
    stack_container.appendChild(new_element);
    stack_container.scrollTo(0, -(stack_container.scrollHeight - 300)); // 300 is height of stack container
});

stack_container.addEventListener("scroll", (e) => {
    console.log(stack_container.scrollTop);
    console.log(stack_container.scrollHeight);
})

pop_button.addEventListener("click", () => {
    stack_container.removeChild(stack_container.lastChild);
});

