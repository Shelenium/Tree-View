import { currencyRateData } from './index.js';
import buttonAction from './buttonAction';
import { closeState } from './buttonState.js';

export default class Unit {
    constructor(obj, parent_id) {
        this.id = obj.id;
        this.parent_id = parent_id;
        this.value =
            obj.budget ?
            obj.budget.value : undefined;
        this.unitOwner = obj.unitOwner;
        this.childUnits = obj.childUnits;
        this.rate =
            obj.budget ?
            currencyRateData.filter(x => x.currency.id == obj.budget.currency.id)[0].rate : undefined;
        return this;
    }

    drawSelf() {

        let unitBoxOwner = document.createElement('h3');
        unitBoxOwner.appendChild(document.createTextNode(this.unitOwner));

        let unitBoxValue = document.createElement('p');
        let value =
            this.value ?
            (this.value * this.rate).toFixed(2) + ' $' : 'no budget for this unit';
        unitBoxValue.appendChild(document.createTextNode(value));

        let unitArticle = document.createElement('article');
        unitArticle.appendChild(unitBoxOwner);
        unitArticle.appendChild(unitBoxValue);

        let isHasChild = this.childUnits.length;
        if (isHasChild) {
            let unitButton = document.createElement('button');
            unitButton.innerHTML = closeState;
            unitButton.classList.add('open-close-button');
            unitButton.setAttribute('data-id', this.id);
            unitButton.onclick = buttonAction;
            unitArticle.appendChild(unitButton);
        }

        let unitBox = document.createElement('div');
        unitBox.id = this.id;
        unitBox.classList.add('box');
        unitBox.setAttribute('data-parent-id', this.parent_id);
        unitBox.appendChild(unitArticle);

        document.getElementById(this.parent_id + 'children').appendChild(unitBox);
    }
}