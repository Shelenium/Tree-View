export default function findShiftMax(style) {
    let boxSet = document.querySelectorAll(style);
    let boxSetLen = boxSet.length;
    let max = 0;

    for (let i = 0; i < boxSetLen; i++) {
        max =
            (max > boxSet[i].id) ?
            max : boxSet[i].id;
    }
    return max;
}