const common_buttons = document.querySelectorAll('.button');
const common_boxes = document.querySelectorAll('.box');

const prevent_button_text_drag = (e)=> {
    /// 클릭시 text selection 방지
    e.preventDefault();
};

common_buttons.forEach((button) => button.addEventListener("mousedown", prevent_button_text_drag));
common_boxes.forEach((box) => box.addEventListener("mousedown", prevent_button_text_drag));