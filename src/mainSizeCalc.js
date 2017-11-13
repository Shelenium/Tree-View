import findShiftMax from './findShiftMax.js';

export default function mainSizeCalc(shift) {
    let shiftLeft = findShiftMax('.box')[0] * shift;
    let boxSize = 4 * shift;
    document.getElementById('0main').style.width = shiftLeft + boxSize + shift + 'px';
}