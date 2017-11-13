import Unit from './Unit.js';

export default function createTree(data, parent_id) {

    let dataLen = data[0] ? data.length : 1;

    for (let i = 0; i < dataLen; i++) {
        let dataItem = data[0] ? data[i] : data;

        if (!document.getElementById(parent_id + 'children')) {
            let unitContBox = document.createElement('div');
            unitContBox.id = parent_id + 'children';
            document.getElementById(parent_id).appendChild(unitContBox);
            document.getElementById(unitContBox.id).classList.add('children', 'invisible');
        }

        var unit = new Unit(dataItem, parent_id);
        unit.drawSelf();
        if (dataItem.childUnits.length > 0) {
            createTree(dataItem.childUnits, dataItem.id);
        }
    }

}