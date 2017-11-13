import { closeState, openState } from './buttonState.js';

export default function buttonAction() {
    this.innerHTML =
        (this.innerHTML == closeState) ?
        openState : closeState;
    let set = document.getElementById(this.dataset.id + 'children');
    set.classList.toggle('invisible');

}